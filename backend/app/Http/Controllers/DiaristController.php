<?php

namespace App\Http\Controllers;

use App\Models\Diarist;
use Illuminate\Http\Request;

class DiaristController extends Controller
{
    /**
     * List the diarists
     *
     * @return void
     */
    public function index()
    {
        $diarists = Diarist::get();

        return view('index', [
            'diarists' => $diarists,
        ]);
    }

    /**
     * Show create form
     *
     * @return void
     */
    public function create()
    {
        return view('create');
    }

    /**
     * Create new diarist
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        $data = $request->except('_token');
        $data['photo'] = $request->photo->store('public');

        $data['cpf'] = str_replace(['.', '-'], '', $data['cpf']);
        $data['zip_code'] = str_replace('-', '', $data['zip_code']);
        $dados['phone'] = str_replace(
            ['(', ')', ' ', '-'],
            '',
            $dados['phone']
        );

        Diarist::create($data);

        return redirect()->route('diarist.index');
    }

    /**
     * Show form update with values
     *
     * @param integer $id
     * @return void
     */
    public function edit(int $id)
    {
        $diarist = Diarist::findOrFail($id);

        return view('edit', [
            'diarist' => $diarist,
        ]);
    }

    /**
     * Update the diarist
     *
     * @param integer $id
     * @param Request $request
     * @return void
     */
    public function update(int $id, Request $request)
    {
        $diarist = Diarist::findOrFail($id);
        $data = $request->except(['_token', '_method']);

        if ($request->hasFile('photo')) {
            $data['photo'] = $request->photo->store();
        }

        $data['cpf'] = str_replace(['.', '-'], '', $data['cpf']);
        $data['zip_code'] = str_replace('-', '', $data['zip_code']);
        $dados['phone'] = str_replace(
            ['(', ')', ' ', '-'],
            '',
            $dados['phone']
        );

        $diarist->update($data);

        return redirect()->route('diarist.index');
    }

    /**
     * Delete the diarist
     *
     * @param integer $id
     * @return void
     */
    public function destroy(int $id)
    {
        $diarist = Diarist::findOrFail($id);

        $diarist->delete();

        return redirect()->route('diarist.index');
    }
}
