<?php

namespace App\Http\Controllers;

use App\Http\Requests\NoteCreateRequest;
use App\Http\Requests\NoteDeleteRequest;
use App\Http\Requests\NoteShowRequest;
use App\Http\Requests\NoteUpdateRequest;
use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function store(NoteCreateRequest $request)
    {
        $note = auth()->user()->notes()->create($request->only([
            'text'
        ]));

        return response()->json($note, 201);
    }

    public function index(Request $request)
    {
        return auth()->user()->notes;
    }

    public function show(NoteShowRequest $request, Note $note)
    {
        return $note;
    }

    public function update(NoteUpdateRequest $request, Note $note)
    {
        $note = tap($note)->update($request->only([
            'text',
        ]));

        return response($note, 200);
    }

    public function destroyAll(Request $request)
    {
        auth()->user()->notes()->delete();

        return response()->noContent();
    }

    public function destroy(NoteDeleteRequest $request, Note $note)
    {
        $note->delete();

        return response()->noContent();
    }
}
