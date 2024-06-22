<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Requests\Dashboard\ContactStoreRequest;
use App\Http\Requests\Dashboard\ContactUpdateRequest;
use App\Http\Requests\Dashboard\ContactDeleteRequest;
use App\Http\Requests\Dashboard\BatchStoreContactsRequest;
use App\Http\Requests\Dashboard\BatchDeleteContactsRequest;
use App\Models\Contact;

class ContactsController extends Controller
{
    public function store(ContactStoreRequest $request)
    {
        // Validate using ContactStoreRequest rules
        $validatedData = $request->validated();

        // Add the user's company_id to the validated data
        $validatedData['company_id'] = auth()->user()->company_id;

        // Create a new contact
        $contact = Contact::create($validatedData);

        return response()->json($contact, 201);
    }

    public function index()
    {
        try {
            // Retrieve authenticated user
            $user = auth()->user();

            // Retrieve user's company id
            $company_id = $user->company_id;

            // Retrieve all contacts related to this company
            $contacts = Contact::where('company_id', $company_id)->get();

            return response()->json($contacts);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    public function update(ContactUpdateRequest $request, Contact $contact)
    {
        // Validate using ContactUpdateRequest rules
        $validatedData = $request->validated();

        // Update the contact
        $contact->update($validatedData);

        return response()->json($contact);
    }

    public function destroy(ContactDeleteRequest $request, Contact $contact)
    {
        // Delete the contact
        $contact->delete();

        return response()->json(['message' => 'Contact deleted successfully']);
    }

    public function storeBatch(BatchStoreContactsRequest $request)
    {
        // Validate using BatchStoreContactsRequest rules
        $validatedData = $request->validated();

        // Extract contacts from the validated data
        $contacts = $validatedData['contacts'];

        // Add user's company_id to all contacts data
        $contacts = array_map(fn ($contact) => ['company_id' => auth()->user()->company_id, ...$contact], $validatedData['contacts']);

        // Perform batch contact creation
        Contact::insert($contacts);

        return response()->json(['message' => 'Contacts batch stored successfully']);
    }

    public function destroyBatch(BatchDeleteContactsRequest $request)
    {
        // Validate using BatchDeleteContactsRequest rules
        $validatedData = $request->validated();

        // Extract contact IDs from the validated data
        $contactIds = $validatedData['contacts'];

        // Perform batch contact deletion
        Contact::whereIn('id', $contactIds)->delete();

        return response()->json(['message' => 'Contacts batch deleted successfully']);
    }
}
