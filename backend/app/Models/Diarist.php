<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diarist extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'cpf',
        'email',
        'phone',
        'street',
        'number',
        'neighborhood',
        'city',
        'state',
        'address',
        'zip_code',
        'ibge_code',
        'photo',
    ];

    protected $visible = ['full_name', 'city', 'photo', 'rating'];

    protected $appends = ['rating'];

    /**
     * Build the image URL
     *
     * @param string $value
     * @return void
     */
    public function getPhotoAttribute(string $value)
    {
        return config('app.url') . '/' . $value;
    }

    /**
     * Return the rating user
     *
     * @param [type] $value
     * @return void
     */
    public function getRatingAttribute($value)
    {
        return mt_rand(1, 5);
    }

    /**
     * Search diarist by ibge code
     *
     * @param integer $ibgeCode
     * @return void
     */
    public static function searchByIbgeCode(int $ibgeCode)
    {
        return self::where('ibge_code', $ibgeCode)
            ->limit(6)
            ->get();
    }

    /**
     * Return the quantity of diarist
     *
     * @param integer $ibgeCode
     * @return void
     */
    public static function countByIbgeCode(int $ibgeCode)
    {
        $count = self::where('ibge_code', $ibgeCode)->count();

        return $count > 6 ? $count - 6 : 0;
    }
}
