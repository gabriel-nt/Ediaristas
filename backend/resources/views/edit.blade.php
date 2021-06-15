@extends('app')

@section('title', 'Criar diarista')

@section('content')
<h1>Editar diarista</h1>

<form action="{{ route('diarist.update', $diarist) }}" method="POST" enctype="multipart/form-data">
    @include('_form')
    @method('PUT')

    <button type="submit" class="btn btn-primary">Salvar</button>
</form>
@endsection
