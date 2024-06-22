<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('campaigns', function (Blueprint $table) {
            // Drop start_date & end_date columns
            $table->dropColumn(['start_date', 'end_date']);

            // Add scheduled_date column
            $table->timestamp('scheduled_date')->default(now());
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('campaigns', function (Blueprint $table) {
            $table->dropColumn(['scheduled_date']);

            $table->timestamp('start_date');
            $table->timestamp('end_date');
        });
    }
};
