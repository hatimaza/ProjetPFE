<template>
    <div class="container">
        <section class="content-header">
      <h1>
        Liste des projets

      </h1>
      <ol class="breadcrumb">
        <li><a href="index.html"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Liste des projets</a></li>
        <li><a href="mesprojets.html">Détail d'une tache</a></li>

      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">

          <!-- /.box -->

          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Mes projets </h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="example1" class="table table-bordered table-bordered">
                <thead>
                <tr>
                  <th>Code de projet</th>
                  <th>nom de le projet</th>
                  <th>Description de projet</th>
                  <th>Date debut</th>
                  <th>Date fin éstimé</th>
                  <th>Date fin réel</th>
                  <th>Client </th>
                  <th>Status</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Pr123</td>
                  <td>Projet1</td>
                  <td>Description projet 1 .... </td>
                  <td>10/4/2019</td>
                  <td>12/11/2020</td>
                  <td>12/11/2020</td>
                  <td>Client1</td>
                  <td>fixed </td>
                
                </tr>

                <tr>
                    <td>Pr123</td>
                    <td>Projet2</td>
                    <td>Description projet 2 .... </td>
                    <td>10/4/2019</td>
                    <td>12/11/2021</td>
                    <td>12/11/2021</td>
                    <td>Client1</td>
                    <td>fixed </td>
                </tr>

                <tr>
                    <td>Pr123</td>
                    <td>Projet13</td>
                    <td>Description projet 3.... </td>
                    <td>10/4/2019</td>
                    <td>12/11/2020</td>
                    <td>12/11/2020</td>
                    <td>Client1</td>
                    <td>fixed </td>
                </tr>

                <tr>
                    <td>Pr123</td>
                    <td>Projet4</td>
                    <td>Description projet 4 .... </td>
                    <td>10/4/2019</td>
                    <td>12/11/2020</td>
                    <td></td>
                    <td>Client3</td>
                    <td>Building </td>
                </tr>

                <tr>
                    <td>Pr123</td>
                    <td>Projet5</td>
                    <td>Description projet 5 .... </td>
                    <td>10/4/2019</td>
                    <td>12/11/2022</td>
                    <td></td>
                    <td>Client2</td>
                    <td>Building </td>
                </tr>     
                </tbody>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
