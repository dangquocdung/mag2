<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RestructureTablesForSimpleSlidersPlugin extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::rename('simple_sliders', 'simple_slider_items');
        Schema::table('simple_slider_items', function (Blueprint $table) {
            $table->integer('simple_slider_id', false, true)->nullable()->after('description');
            $table->dropColumn('status');
        });

        Schema::create('simple_sliders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 120);
            $table->string('key', 120);
            $table->text('description', 255)->nullable();
            $table->tinyInteger('status')->unsigned()->default(1);

            $table->timestamps();
            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('simple_sliders');

        Schema::rename('simple_slider_items', 'simple_sliders');
        Schema::table('simple_sliders', function (Blueprint $table) {
            $table->tinyInteger('status')->unsigned()->default(1);
        });

    }
}
