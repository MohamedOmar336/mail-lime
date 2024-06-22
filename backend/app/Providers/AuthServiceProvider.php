<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use App\Models\Campaign;
use App\Models\Company;
use App\Models\Contact;
use App\Models\Note;
use App\Models\Todo;
use App\Models\User;
use App\Models\UserRole;
use App\Policies\CompanyPolicy;
use App\Policies\NotePolicy;
use App\Policies\TodoPolicy;
use App\Policies\UserPolicy;
use App\Policies\UserRolePolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        User::class => UserPolicy::class,
        Contact::class => UserPolicy::class,
        Campaign::class => UserPolicy::class,
        Todo::class => TodoPolicy::class,
        Note::class => NotePolicy::class,
        Company::class => CompanyPolicy::class,
        UserRole::class => UserRolePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        //
    }
}
