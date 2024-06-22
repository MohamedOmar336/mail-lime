<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CalendarController extends Controller
{
    public function index(Request $request)
    {
        $events = [];

        $todos = auth()->user()->todos;
        $events = $todos->map(function ($todo) {
            return [
                'event_type' => 'Todo Due Date',
                'date' => $todo->due_date,
                'related_entity' => $todo,
            ];
        });

        $campaigns = auth()->user()->company->campaigns;
        $events = collect($events)->merge(collect($campaigns)->flatMap(function ($campaign) {
            return [
                [
                    'event_type' => 'Campaign Scheduled Date',
                    'date' => $campaign->scheduled_date,
                    'related_entity' => $campaign,
                ],
            ];
        }));

        return response()->json($events);
    }
}
