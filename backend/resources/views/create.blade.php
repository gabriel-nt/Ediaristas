@extends('app')

@section('title', 'Criar diarista')

@section('content')
<h1>Criar diarista</h1>

<form action="{{ route('diarist.store') }}" method="POST" enctype="multipart/form-data">
    @include('_form')

    <button type="submit" class="btn btn-primary">Salvar</button>
</form>
@endsection
