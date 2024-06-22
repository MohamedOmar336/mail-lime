<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompanyDeleteRequest;
use App\Http\Requests\CompanyUpdateRequest;
use App\Http\Requests\CompanyUsersIndexRequest;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function indexCompanyUsers(CompanyUsersIndexRequest $request)
    {
        return auth()->user()->company->users;
    }

    public function show(Request $request)
    {
        return auth()->user()->company;
    }

    public function update(CompanyUpdateRequest $request)
    {
        $company = tap(auth()->user()->company)->update($request->only([
            'name'
        ]));

        return $company;
    }

    public function destroy(CompanyDeleteRequest $request)
    {
        auth()->user()->company->delete();

        return response()->noContent();
    }
}
