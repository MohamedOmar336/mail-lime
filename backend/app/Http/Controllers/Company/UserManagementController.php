<?php

namespace App\Http\Controllers\Company;

use App\Http\Requests\UserDeleteRequest;
use App\Http\Requests\UserIndexRequest;
use App\Http\Requests\UserShowRequest;
use App\Mail\UserAddedByAdmin;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserBatchDeleteRequest;
use App\Http\Requests\UserUpdateOtherRequest;

class UserManagementController extends Controller
{
    public function store(UserCreateRequest $request)
    {
        $user = User::create(
            array_merge(
                $request->only([
                    'first_name',
                    'last_name',
                    'email',
                    'password',
                    'user_role_id',
                ]),
                [
                    'company_id' => auth()->user()->company->id,
                ],
            )
        );

        Mail::to($user->email)->send(new UserAddedByAdmin(
            $request->user()->fullName(),
            $request->user()->company->name,
            $request->email,
            $request->password
        ));

        $user = collect($user)->merge([
            'user_role' => $user->userRole,
            'company' => $user->company,
        ]);

        return response()->json($user, 201);
    }

    public function show(UserShowRequest $request, User $user)
    {
        return $user;
    }

    public function update(UserUpdateOtherRequest $request, User $user)
    {
        $user = tap(auth()->user())->update($request->only([
            'user_role_id',
        ]))->refresh();

        return response()->json($user, 200);
    }

    public function destroy(UserDeleteRequest $request, User $user)
    {
        $user->delete();

        return response()->noContent();
    }

    public function destroyBatch(UserBatchDeleteRequest $request)
    {
        $usersIds = $request->only(['users']);
        User::whereIn('id', $usersIds)->delete();

        return response()->noContent();
    }
}
