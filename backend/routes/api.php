<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CalendarController;
use App\Http\Controllers\Company\UserManagementController;
use App\Http\Controllers\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\UserRoleController;

Route::prefix('auth')->group(function () {
    Route::middleware('guest')->post('/signup', [AuthController::class, 'signup']);
    Route::middleware('guest')->post('/login', [AuthController::class, 'login']);
    Route::middleware('auth')->post('/logout', [AuthController::class, 'logout']);
    Route::middleware('auth')->post('/validate-token', [AuthController::class, 'validateToken']);
    Route::middleware('guest')->post('/forgot-password', [AuthController::class, 'forgotPassword']);
    Route::middleware('guest')->post('/reset-password', [AuthController::class, 'resetPassword']);
});

Route::prefix('manage')->middleware('auth')->namespace('App\Http\Controllers\Company')->group(function () {
    Route::prefix('user')->group(function () {
        Route::post('/', [UserManagementController::class, 'store']);

        Route::get('/{user}', [UserManagementController::class, 'show']);

        Route::put('/{user}', [UserManagementController::class, 'update']);

        Route::delete('/{user}', [UserManagementController::class, 'destroy']);

        Route::prefix('batch')->group(function () {
            Route::delete('/remove', [UserManagementController::class, 'destroyBatch']);
        });
    });

    // Campaign Management
    Route::prefix('campaign')->group(function () {
        Route::post('/', 'CampaignManagementController@store')->name('manage.campaign.store');
        Route::get('/all', 'CampaignManagementController@index')->name('manage.campaign.index');
        Route::get('/{campaign}', 'CampaignManagementController@getCampaignById')->name('manage.campaign.getCampaignById');
        Route::put('/{campaign}', 'CampaignManagementController@update')->name('manage.campaign.update');
        Route::delete('/{campaign}', 'CampaignManagementController@destroy')->name('manage.campaign.delete');

        // Batch Campaign Management APIs
        Route::prefix('batch')->group(function () {
            Route::delete('/remove', 'CampaignManagementController@destroyBatch')->name('campaigns.destroyBatch');
        });
    });

    Route::get('/roles/all', [UserRoleController::class, 'index']);
});

Route::prefix('user')->middleware('auth')->group(function () {
    Route::get('/', function (Request $request) {
        return auth()->user();
    });

    Route::put('/password', [UserController::class, 'updatePassword']);
    Route::put('/', [UserController::class, 'update']);

    Route::delete('/', [UserController::class, 'destroy']);
});

Route::prefix('todo')->middleware('auth')->group(function () {
    Route::post('/', [TodoController::class, 'store']);

    Route::get('/all', [TodoController::class, 'index']);
    Route::get('/{todo}', [TodoController::class, 'show']);

    Route::put('/{todo}', [TodoController::class, 'update']);

    Route::delete('/all', [TodoController::class, 'destroyAll']);
    Route::delete('/{todo}', [TodoController::class, 'destroy']);

    // Batch Todos APIs
    Route::prefix('batch')->group(function () {
        Route::delete('/remove', [TodoController::class, 'destroyBatch'])->name('todos.destroyBatch');
    });
});

Route::prefix('note')->middleware('auth')->group(function () {
    Route::post('/', [NoteController::class, 'store']);

    Route::get('/all', [NoteController::class, 'index']);
    Route::get('/{note}', [NoteController::class, 'show']);

    Route::put('/{note}', [NoteController::class, 'update']);

    Route::delete('/all', [NoteController::class, 'destroyAll']);
    Route::delete('/{note}', [NoteController::class, 'destroy']);
});

Route::prefix('company')->middleware('auth')->group(function () {
    Route::get('/users', [CompanyController::class, 'indexCompanyUsers']);
    Route::get('/', [CompanyController::class, 'show']);

    Route::put('/', [CompanyController::class, 'update']);

    Route::delete('/', [CompanyController::class, 'destroy']);
});

Route::middleware('auth')->prefix('contacts')->namespace('App\Http\Controllers\Dashboard')->group(function () {
    // Single Contacts APIs
    Route::post('/', 'ContactsController@store')->name('contacts.store');
    Route::get('/', 'ContactsController@index')->name('contacts.index');
    Route::put('/{contact}', 'ContactsController@update')->name('contacts.update');
    Route::delete('/{contact}', 'ContactsController@destroy')->name('contacts.destroy');

    // Batch Contacts APIs
    Route::prefix('batch')->group(function () {
        Route::post('/', 'ContactsController@storeBatch')->name('contacts.storeBatch');
        Route::delete('/remove', 'ContactsController@destroyBatch')->name('contacts.destroyBatch');
    });
});

Route::middleware('auth')->prefix('calendar')->group(function () {
    Route::get('/all', [CalendarController::class, 'index']);
});

Route::middleware('auth')->prefix('dashboard')->group(function () {
    Route::get('/stats', [DashboardController::class, 'index']);
});
