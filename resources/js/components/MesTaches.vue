<template>
    <div class="container">
        <section class="content-header">
      <h1>
        Liste des taches

      </h1>
      <ol class="breadcrumb">
        <li><a href="index.html"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="listetaches.html">Liste des taches</a></li>
        <li><a href="#">Détail d'une tache</a></li>

      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">

          <!-- /.box -->

          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Mes sous tache </h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="example1" class="table table-bordered table-bordered">
                <thead>
                <tr>
                  <th>Code de la sous tache</th>
                  <th>nom de le projet</th>
                  <th>Nom de la sous tache</th>
                  <th>Description de la sous tache</th>
                  <th>Date debut</th>
                  <th>Date fin éstimé</th>
                  <th>Date fin réel</th>
                  <th>heure</th>
                  <th>Status</th>
                 
                  <th>Sous taches</th>
                  <th>Modifier status</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>ST123</td>
                  <td>projet1</td>
                  <td>Sous tache1</td>
                  <td>Description sous tache 1 .... </td>
                  <td>10/4/2019</td>
                  <td>12/4/2019</td>
                  <td>12/4/2019</td>
                  <td>8h</td>
                  <td>fixed </td>
                 
                  <td><router-link to="/DetailTache" class="btn btn-primary">Détail</router-link></td>
                 
                </tr>

                <tr>
                  <td>ST123</td>
                  <td>projet1</td>
                  <td>Sous tache1</td>
                  <td>Description sous tache 1 .... </td>
                  <td>10/4/2019</td>
                  <td>12/4/2019</td>
                  <td>12/4/2019</td>
                  <td>8h</td>
                  <td>fixed </td>
                 
                  <td><a href="detailtache.html" class="btn btn-primary">Détail</a></td>
                </tr>

                <tr>
                  <td>ST123</td>
                  <td>projet1</td>
                  <td>Sous tache1</td>
                  <td>Description sous tache 1 .... </td>
                  <td>12/4/2019</td>
                  <td>12/4/2019</td>
                  <td>12/4/2019</td>
                  <td>8h</td>
                  <td>fixed </td>
                 
                  <td><a href="detailtache.html" class="btn btn-primary">Détail</a></td>
                </tr>

                <tr>
                  <td>ST123</td>
                  <td>projet1</td>
                  <td>Sous tache1</td>
                  <td>Description sous tache 1 .... </td>
                  <td>13/4/2019</td>
                  <td>13/4/2019</td>
                  <td>13/4/2019</td>
                  <td>8h</td>
                  <td>fixed </td>
                 
                  <td><a href="detailtache.html" class="btn btn-primary">Détail</a></td>
                </tr>

                <tr>
                  <td>ST123</td>
                  <td>projet2</td>
                  <td>Sous tache1</td>
                  <td>Description sous tache 1 .... </td>
                  <td>13/4/2019</td>
                  <td>13/4/2019</td>
                  <td>13/4/2019</td>
                  <td>8h</td>
                  <td>building </td>
                 
                  <td><a href="detailtache.html" class="btn btn-primary">Détail</a></td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-default">
                      modifier
                      </button> </td>
                </tr>

                <tr>
                  <td>ST123</td>
                  <td>projet2</td>
                  <td>Sous tache1</td>
                  <td>Description sous tache 1 .... </td>
                  <td>15/4/2019</td>
                  <td>15/4/2019</td>
                  <td>15/4/2019</td>
                  <td>8h</td>
                  <td>building </td>
                 
                  <td><a href="detailtache.html" class="btn btn-primary">Détail</a></td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-default">
                      modifier
                      </button> </td>
                </tr>
                
                </tbody>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <div class="modal fade" id="modal-default">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Status</h4>
                  </div>
                  <div class="modal-body">
                   Status de sous tache : 
                   <select class="form-control">
                      <option>Fixed</option>
                      <option>Refixed</option>
                    
                    </select>
                    
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">fermer</button>
                    <button type="button" class="btn btn-primary">Modifer</button>
                  </div>
                </div>
                <!-- /.modal-content -->
              </div>
          <!-- /.col -->
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
