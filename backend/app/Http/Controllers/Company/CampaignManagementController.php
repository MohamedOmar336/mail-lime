<?php

namespace App\Http\Controllers\Company;

use Carbon\Carbon;
use App\Models\Campaign;
use Illuminate\Http\Request;
use App\Models\CampaignAudience;
use App\Http\Controllers\Controller;
use App\Http\Requests\Company\CampaignStoreRequest;
use App\Http\Requests\Company\CampaignDeleteRequest;
use App\Http\Requests\Company\CampaignUpdateRequest;
use App\Http\Requests\Company\BatchDeleteCampaignsRequest;
use App\Http\Requests\Company\RetrieveCampaignRequest;

class CampaignManagementController extends Controller
{
    public function store(CampaignStoreRequest $request)
    {
        // Validate using CampaignStoreRequest rules
        $validatedData = $request->validated();

        // Add the user's company_id to the validated data
        $validatedData['company_id'] = auth()->user()->company_id;

        // Format the date values
        if (isset($validatedData['scheduled_date'])) {
            $validatedData['scheduled_date'] = Carbon::createFromFormat('d-m-Y H:i:s', $validatedData['scheduled_date'])->toDateTimeString();
        } else {
            // Set 'scheduled_date' to the current date if not provided
            $validatedData['scheduled_date'] = Carbon::now();
        }

        // Create a new campaign
        $campaign = Campaign::create($validatedData);

        // Attach contacts to the campaign
        $contacts = $validatedData['contacts'] ?? [];

        // Create CampaignAudience records and associate them with the campaign
        $audienceData = [];
        foreach ($contacts as $contactId) {
            $audienceData[] = new CampaignAudience(['contact_id' => $contactId]);
        }

        $campaign->audience()->saveMany($audienceData);

        return response()->json($campaign, 201);
    }

    public function index(Request $request)
    {
        try {
            // Retrieve authenticated user
            $user = auth()->user();

            // Retrieve user's company id
            $company_id = $user->company_id;

            // Retrieve all campaigns related to this company
            $query = Campaign::where('company_id', $company_id)->with('audience');

            // Check if the 'type' filter is provided
            if ($request->has('type')) {
                $query->where('type', $request->input('type'));
            }

            // Check if the 'is_ab_testing' filter is provided
            if ($request->has('is_ab_testing')) {
                $isABTesting = filter_var($request->input('is_ab_testing'), FILTER_VALIDATE_BOOLEAN);
                $query->where('is_ab_testing', $isABTesting);
            }

            // Check if the 'status' filter is provided
            if ($request->has('status')) {
                $query->where('status', $request->input('status'));
            }

            // Execute the query and get the results
            $campaigns = $query->get();

            return response()->json($campaigns);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    public function getCampaignById(RetrieveCampaignRequest $request, Campaign $campaign)
    {
        $campaign->load('audience');
        return response()->json($campaign, 200);
    }

    public function update(CampaignUpdateRequest $request, Campaign $campaign)
    {
        // Validate using CampaignUpdateRequest rules
        $validatedData = $request->validated();

        // Format the date values
        if (isset($validatedData['scheduled_date'])) {
            $validatedData['scheduled_date'] = Carbon::createFromFormat('d-m-Y H:i:s', $validatedData['scheduled_date'])->toDateTimeString();
        } else {
            // Set 'scheduled_date' to the current date if not provided
            $validatedData['scheduled_date'] = Carbon::now();
        }

        // Update the campaign
        $campaign->update($validatedData);

        // Delete existing campaign contacts
        $campaign->audience()->delete();

        // Attach contacts to the campaign
        $contacts = $validatedData['contacts'] ?? [];

        // Create CampaignAudience records and associate them with the campaign
        $audienceData = [];
        foreach ($contacts as $contactId) {
            $audienceData[] = new CampaignAudience(['contact_id' => $contactId]);
        }

        $campaign->audience()->saveMany($audienceData);

        return response()->json($campaign);
    }

    public function destroy(CampaignDeleteRequest $request, Campaign $campaign)
    {
        // Delete the campaign
        $campaign->delete();

        return response()->json(['message' => 'Campaign deleted successfully']);
    }

    public function destroyBatch(BatchDeleteCampaignsRequest $request)
    {
        // Validate using BatchDeleteCampaignsRequest rules
        $validatedData = $request->validated();

        // Extract campaign IDs from the validated data
        $campaignIds = $validatedData['campaigns'];

        // Perform batch campaign deletion
        Campaign::whereIn('id', $campaignIds)->delete();

        return response()->json(['message' => 'Campaigns batch deleted successfully']);
    }
}
