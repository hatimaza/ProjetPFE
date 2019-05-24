<template>
    <div class="container">
       <section class="content-header">
      <h1>
        Liste des tickets

      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Liste des tickets</a></li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">

        <div class="col-md-12">


          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Mes des tickets</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>code de ticket</th>
                  <th>Projet</th>
                  <th>Description</th>
                  <th>Date debut</th>
                  <th>Date fin</th>
                  <th>Status</th>
                  <th>Priorité</th>
                  <th>Détails</th>
                  <th>Action</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>codeTicket1</td>
                  <td>Projet1</td>
                  <td>Description ....</td>
                  <td>10/4/2019</td>
                  <td>16/4/2019</td>
                  <td>Building</td>
                  <td>normal</td>
                  <td><router-link class="btn btn-primary" to="/DetailTicket">detail</router-link> </td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-default">
                      repondre
                     </button> </td>
                </tr>
                <tr>
                  <td>codeTicket4</td>
                  <td>Projet1</td>
                  <td>Description ....</td>
                  <td>10/4/2019</td>
                  <td>16/4/2019</td>
                  <td>Fixed</td>
                  <td>normal</td>
                  <td><a class="btn btn-primary" href="detailticket1.html">detail</a> </td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-default">
                      repondre
                     </button> </td>
                </tr>
                <tr>
                  <td>codeTicket2</td>
                  <td>Projet1</td>
                  <td>Description1 ....</td>
                  <td>20/4/2019</td>
                  <td>26/4/2019</td>
                  <td>fixed</td>
                  <td>urgent</td>
                  <td><a class="btn btn-primary" href="detailticket1.html">detail</a> </td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-default">
                      repondre
                     </button> </td>
                </tr>
                <tr>
                  <td>codeTicket3</td>
                  <td>Projet1</td>
                  <td>Description3 ....</td>
                  <td>9/4/2019</td>
                  <td>16/4/2019</td>
                  <td>Building</td>
                  <td>normal</td>
                  <td><a class="btn btn-primary" href="detailticket1.html">detail</a> </td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-default">
                      repondre
                     </button> </td>
                </tr>

                </tbody>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->


          <!-- /.box -->
        </div>
        <div class="modal fade" id="modal-default">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title">Commentaire</h4>
                </div>
                <div class="modal-body">
                  Commentaire :
                  <textarea class="form-control" placeholder="....">
                 
                  </textarea>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default pull-left" data-dismiss="modal">fermer</button>
                  <button type="button" class="btn btn-primary">Repondre</button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
        <!-- /.col -->
      </div>
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
