<template>
    <div class="container">
        <section class="content-header">
      <h1>
        détails

      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Détail</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">

        <!-- /.col -->
        <div class="col-md-12">
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Les modifications</h3>

              <div class="box-tools pull-right">
                <div class="has-feedback">
                  <input type="text" class="form-control input-sm" placeholder="Search Mail">
                  <span class="glyphicon glyphicon-search form-control-feedback"></span>
                </div>
              </div>
              <!-- /.box-tools -->
            </div>
            <!-- /.box-header -->
            <div class="box-body no-padding">
              <div class="mailbox-controls">
                <!-- Check all button -->
                  <!-- /.btn-group -->

                <!-- /.pull-right -->
              </div>
              <div class="table-responsive mailbox-messages">
                <table class="table table-hover table-striped">
                  <thead>
                    <th> Nom d'utilisateur</th>
                    <th> Objet </th>
                    <th>  Date d'action</th>
                    <th> Cause </th>
                    <th> Détails </th>
                  </thead>
                  <tbody>
                  <tr>

                    <td >Alexander Pierce</td>
                    <td ><b>Ticket </b> code ticket
                    </td>
                    <td > 15/4/2019</td>
                    <td > cause 1 .... </td>
                    <td><a href="Details.html" class="btn btn-primary">Détail</a></td>
                  </tr>
                  <tr>

                    <td >Alexander Pierce</td>
                    <td ><b>Ticket </b> code ticket
                    </td>
                    <td > 15/4/2019</td>
                    <td > cause 1 .... </td>
                    <td><a href="Details.html" class="btn btn-primary">Détail</a></td>
                  </tr>
                  <tr>

                    <td >Alexander Pierce</td>
                    <td ><b>Tache</b> code tache
                    </td>
                    <td > 3/4/2019</td>
                    <td > cause 1 .... </td>
                    <td><a href="Details.html" class="btn btn-primary">Détail</a></td>
                  </tr>
                  <tr>

                    <td >Alexander Pierce</td>
                    <td ><b>backlog </b> code Backlog
                    </td>
                    <td > 20/4/2019</td>
                    <td > cause 1 .... </td>
                    <td><a href="Details.html" class="btn btn-primary">Détail</a></td>
                  </tr>
                  <tr>
                    <td >Alexander Pierce</td>
                    <td ><b>Ticket </b> code ticket
                    </td>
                    <td > 13/4/2019</td>
                    <td > cause 1 .... </td>
                    <td><a href="Details.html" class="btn btn-primary">Détail</a></td>
                  </tr>

                  </tbody>
                </table>
                <!-- /.table -->
              </div>
              <!-- /.mail-box-messages -->
            </div>
            <!-- /.box-body -->
            <div class="box-footer no-padding">

            </div>
          </div>
          <!-- /. box -->
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
