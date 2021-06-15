<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diarist extends Model
{
    use HasFactory;

    protected $fillable = [
        "full_name",
        "cpf",
        "email",
        "phone",
        "street",
        "number",
        "neighborhood",
        "city",
        "state",
        "address",
        "zip_code",
        "ibge_code",
        "photo",
    ];
}
