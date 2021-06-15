<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiaristsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diarists', function (Blueprint $table) {
            $table->id();
            $table->string('full_name', 100);
            $table->char('cpf', 11);
            $table->string('email', 100);
            $table->char('phone', 11);
            $table->string('street');
            $table->string('number', 20);
            $table->string('neighborhood', 50);
            $table->string('address', 50)->nullable();
            $table->char('zip_code', 8);
            $table->string('city', 100);
            $table->char('state', 2);
            $table->integer('ibge_code');
            $table->string('photo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('diarists');
    }
}
