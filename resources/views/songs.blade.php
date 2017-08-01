@extends('layouts.app')

@section('content')
<div class="container" id="bandstable">
    <div class="row">
        <div class="col-md-4 col-md-offset-1">
            <h2>Titulo</h2>
            <form class="form-horizontal">
                <div class="form-group">
                    <div class="col-md-9">
                        <label for="generoMusical">Genero musical</label>
                        <select v-model="genero" class="form-control" id="generoMusical" style="-webkit-appearance: none;">
                            <option disabled value="">Seleccione un genero</option>
                            <option v-for="genero in generos">@{{ genero }}</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <div class=col-md-9>
                        <input type="text" class="form-control" v-model="nombreBanda" placeholder="Nombre de la banda">
                    </div>
                    <div class="col-md-3">
                        <button type="button" class="btn btn-primary" @click="filterBands">Filtrar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4 col-md-offset-1">
            <div class="alert alert-danger" v-show="error">
                <strong>Error!</strong> Asegurate de completar los campos
            </div>
        </div> 
    </div>
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-primary">
                <div class="panel-heading">Canciones</div>
                <!-- v-cloak sirve para no mostrar esto hasta que este cargado -->
                <table class="table table-bordered" v-cloak>
                    <tr>
                        <th>Genero</th>
                        <th>Banda</th>
                        <th>Integrantes</th>
                        <th>Cantante</th>
                        <th>Discos</th>
                    </tr>
                    <tr v-for="banda in bandas">
                        <td>@{{ banda.genero }}</td>
                        <td>@{{ banda.nombre }}</td>
                        <td>
                            <ul style="list-style: none; padding: 0px;">
                                <li v-for="integrante in banda.integrantes">@{{ integrante }}</li>
                            </ul>
                        </td>
                        <td>
                            <img :src="banda.cantante.foto" style="width: 100px;">
                            @{{ banda.cantante.nombre }}
                        </td>
                        <td>@{{ banda.discos }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>
<script src="{{ url('/js/songs.js') }}"></script>
@endsection
