<?php

namespace Botble\Blog\Http\Requests;

use Botble\Support\Http\Requests\Request;

class TagRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     * @author Dung Thinh
     */
    public function rules()
    {
        return [
            'name' => 'required|max:120',
            'slug' => 'required|max:120',
            'description' => 'max:400',
        ];
    }
}
