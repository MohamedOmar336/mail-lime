<?php

namespace App\Http\Controllers;

use App\Models\Campaign;
use App\Models\CampaignAudience;
use App\Models\Contact;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $date_six_months_ago = Carbon::now()->subMonthsNoOverflow(5)->toDateString();

        // get both email and sms contacts added in past 6 months
        // (including current month). so, if the current month is 12,
        // this should get contacts added between [7-12] **inclusive**
        $last_six_months_contacts_by_month =
            Contact::select([
                DB::raw('COUNT(email) as emails'),
                DB::raw('COUNT(phone_number) as phone_numbers'),
                DB::raw('MONTH(created_at) as month'),
            ])->where('company_id', auth()->user()->company_id)
              ->whereDate('created_at', '>=', $date_six_months_ago)
              ->groupByRaw('MONTH(created_at)')
              ->get();

        // collect into pretty user-facing results
        $email_contacts = collect([]);
        $sms_contacts = collect([]);

        $last_six_months_contacts_by_month->each(function ($row) use ($email_contacts, $sms_contacts) {
            $row->emails > 0 &&
                $email_contacts->push([
                    'month' => $row->month,
                    'emails' => $row->emails,
                ]);

            $row->phone_numbers > 0 &&
                $sms_contacts->push([
                    'month' => $row->month,
                    'sms' => $row->phone_numbers,
                ]);
        });

        // get both email and sms campaigns just like above
        $last_six_months_campaigns =
            Campaign::select([
                DB::raw('MONTH(created_at) as month'),
                'type',
                DB::raw('COUNT(type) as count'),
            ])->where('company_id', auth()->user()->company_id)
              ->whereDate('created_at', '>=', $date_six_months_ago)
              ->groupByRaw('MONTH(created_at), type')
              ->get();

        // collect into pretty user-facing results
        $email_campaigns = collect([]);
        $sms_campaigns = collect([]);

        $last_six_months_campaigns->each(function ($row) use ($email_campaigns, $sms_campaigns) {
            if ($row->type === 'email') {
                $email_campaigns->push([
                    'month' => $row->month,
                    'emails' => $row->count,
                ]);
            } else {
                $sms_campaigns->push([
                    'month' => $row->month,
                    'sms' => $row->count,
                ]);
            }
        });

        // same as above, but for sent emails and sms
        $last_six_months_sent_mails_and_sms =
            CampaignAudience::select([
                DB::raw('MONTH(scheduled_date) as month'),
                'type',
                DB::raw('COUNT(type) as count'),
            ])->join('campaigns', 'campaigns_audience.id', '=', 'campaigns.id')
              ->where('company_id', auth()->user()->company_id)
              ->whereDate('scheduled_date', '>=', $date_six_months_ago)
              ->groupByRaw('MONTH(scheduled_date), type')
              ->get();

        $sent_emails = collect([]);
        $sent_sms = collect([]);

        $last_six_months_sent_mails_and_sms->each(function ($row) use ($sent_emails, $sent_sms) {
            if ($row->type === 'email') {
                $sent_emails->push([
                    'month' => $row->month,
                    'emails' => $row->count,
                ]);
            } else {
                $sent_sms->push([
                    'month' => $row->month,
                    'sms' => $row->count,
                ]);
            }
        });

        // get 5 most recent delivered campaigns (scheduled_date already passed)
        $recent_campaigns =
            Campaign::where('company_id', auth()->user()->company_id)
                    ->whereDate('scheduled_date', '<=', Carbon::now()->toDateTimeString())
                    ->orderBy('scheduled_date', 'desc')
                    ->limit(5)
                    ->get();

        return response()->json([
            'email_contacts' => $email_contacts,
            'sms_contacts' => $sms_contacts,

            'email_campaigns' => $email_campaigns,
            'sms_campaigns' => $sms_campaigns,

            'sent_emails' => $sent_emails,
            'sent_sms' => $sent_sms,

            'recent_campaigns' => $recent_campaigns,
        ]);
    }
}
