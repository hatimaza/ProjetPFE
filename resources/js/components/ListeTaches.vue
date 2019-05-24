<template>
    <div class="container">
        <section class="content-header">
      <h1>
        Liste des taches

      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Liste des taches</a></li>

      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">

          <!-- /.box -->

          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Tous les taches </h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Code de la tache</th>
                  <th>Backlog</th>
                  <th>Nom de la tache</th>
                  <th>Description de la tache</th>
                  <th>Date debut</th>
                  <th>Date fin éstimé</th>
                  <th>Date fin réel</th>
                  <th>Prix par heure</th>
                  <th>Status</th>
                  <th>Sous taches</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>T123</td>
                  <td>Backlog</td>
                  <td>Tache1</td>
                  <td>Description 1 .... </td>
                  <td>10/4/2019</td>
                  <td>15/4/2019</td>
                  <td>15/4/2019</td>
                  <td>100</td>
                  <td>fixed </td>
                  <td><router-link to="/DetailTache" class="btn btn-primary">Détail</router-link></td>
                </tr>

                <tr>
                  <td>T123</td>
                  <td>Backlog</td>
                  <td>Tache1</td>
                  <td>Description 1 .... </td>
                  <td>10/4/2019</td>
                  <td>14/4/2019</td>
                  <td>14/4/2019</td>
                  <td>100</td>
                  <td>fixed</td>
                  <td><a href="detailtache.html" class="btn btn-primary">Détail</a></td>
                </tr>

                <tr>
                  <td>T123</td>
                  <td>Backlog</td>
                  <td>Tache1</td>
                  <td>Description 1 .... </td>
                  <td>12/4/2019</td>
                  <td>20/4/2019</td>
                  <td> </td>
                  <td>100 </td>
                  <td>building</td>
                  <td><a href="detailtache.html" class="btn btn-primary">Détail</a></td>
                </tr>

                <tr>
                  <td>T123</td>
                  <td>Backlog</td>
                  <td>Tache1</td>
                  <td>Description 1 .... </td>
                  <td>13/4/2019</td>
                  <td>19/4/2019</td>
                  <td></td>
                  <td>100 </td>
                  <td>building</td>
                  <td><a href="detailtache.html" class="btn btn-primary">Détail</a></td>
                </tr>

                <tr>
                  <td>T123</td>
                  <td>Backlog</td>
                  <td>Tache1</td>
                  <td>Description 1 .... </td>
                  <td>16/4/2019</td>
                  <td>22/4/2019</td>
                  <td></td>
                  <td>100 </td>
                  <td>not start</td>
                  <td><a href="detailtache.html" class="btn btn-primary">Détail</a></td>
                </tr>


                <tr>
                  <td>T123</td>
                  <td>Backlog</td>
                  <td>Tache1</td>
                  <td>Description 1 .... </td>
                  <td>10/4/2019</td>
                  <td>10/4/2019</td>
                  <td>10/4/2019</td>
                  <td>100 </td>
                  <td>not start </td>
                  <td><a href="detailtache.html" class="btn btn-primary">Détail</a></td>
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
