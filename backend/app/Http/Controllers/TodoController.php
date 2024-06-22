<?php

namespace App\Http\Controllers;

use App\Http\Requests\Dashboard\BatchDeleteTodosRequest;
use App\Http\Requests\TodoCreateRequest;
use App\Http\Requests\TodoDeleteRequest;
use App\Http\Requests\TodoShowRequest;
use App\Http\Requests\TodoUpdateRequest;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TodoController extends Controller
{
    public function store(TodoCreateRequest $request)
    {
        $todo = auth()->user()->todos()->create($request->only([
            'text',
            'due_date',
        ]));

        return response()->json($todo, 201);
    }

    public function index(Request $request)
    {
        return auth()->user()->todos;
    }

    public function show(TodoShowRequest $request, Todo $todo)
    {
        return $todo;
    }

    public function update(TodoUpdateRequest $request, Todo $todo)
    {
        $todo = tap($todo)->update($request->only([
            'text',
            'due_date',
        ]));

        return response()->json($todo, 200);
    }

    public function destroyAll(Request $request)
    {
        auth()->user()->todos()->delete();

        return response()->noContent();
    }

    public function destroy(TodoDeleteRequest $request, Todo $todo)
    {
        $todo->delete();

        return response()->noContent();
    }

    public function destroyBatch(BatchDeleteTodosRequest $request)
    {
        // Validate using BatchDeleteTodosRequest rules
        $validatedData = $request->validated();

        // Extract todo IDs from the validated data
        $todoIds = $validatedData['todos'];

        // Perform batch todo deletion
        Todo::whereIn('id', $todoIds)->delete();

        return response()->json(['message' => 'Todos batch deleted successfully']);
    }
}
