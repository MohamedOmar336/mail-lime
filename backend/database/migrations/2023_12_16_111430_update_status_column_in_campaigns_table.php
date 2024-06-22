<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB; 

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('campaigns', function (Blueprint $table) {
            $table->dropColumn(['status']);
        });

        Schema::table('campaigns', function (Blueprint $table) {
            $table->enum('status', ['scheduled', 'drafted', 'finished'])->default('drafted');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('campaigns', function (Blueprint $table) {
            $table->dropColumn(['status']);
        });

        Schema::table('campaigns', function (Blueprint $table) {
            $table->enum('status', ['active', 'inactive'])->default('inactive');
        });
    }
};