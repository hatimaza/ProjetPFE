<template>
    <div class="container">
        <section class="content-header">
      <h1>
        Mon Profile

      </h1>
      <ol class="breadcrumb">
        <li><a href="index.html"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="Profile.html">Mon Profile</a></li>
      </ol>
    </section>

    <!-- Main content -->


    <!-- Main content -->
    <section class="content">

      <div class="row">

        <!-- /.col -->
        <div class="col-md-12">
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              <li class="active"><a href="#activity" data-toggle="tab">Mon profile</a></li>
              <li><a href="#timeline" data-toggle="tab">Modifier</a></li>

            </ul>
            <div class="tab-content">
              <div class="active tab-pane" id="activity">
                <div class="box box-primary">
                  <div class="box-body box-profile">
                    <img class="profile-user-img img-responsive img-circle" src="dist/img/user1-128x128.jpg" alt="User profile picture">

                    <h3 class="profile-username text-center">Hatim Aza</h3>

                    <p class="text-muted text-center">Developeur  PHP</p>

                    <ul class="list-group list-group-unbordered">
                      <li class="list-group-item">
                        <b>Email</b> <a class="pull-right">Hatim.aza@gmail.com</a>
                      </li>
                      <li class="list-group-item">
                        <b>Login</b> <a class="pull-right">Hatim10</a>
                      </li>

                    </ul>

                    <a href="#timeline" class="btn btn-primary btn-block"><b>modifier</b></a>
                  </div>
                  <!-- /.box-body -->
                </div>
                <!-- Post -->

                <!-- /.post -->

                <!-- Post -->

                <!-- /.post -->

                <!-- Post -->

                <!-- /.post -->
              </div>
              <!-- /.tab-pane -->
              <div class="tab-pane" id="timeline">
                <form class="form-horizontal">
                  <div class="form-group">
                    <label for="inputName" class="col-sm-2 control-label">Nom </label>

                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputName" placeholder="Nom">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputName" class="col-sm-2 control-label">Prenom</label>

                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputName" placeholder="prenom">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputEmail" class="col-sm-2 control-label">Email</label>

                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="inputpass" class="col-sm-2 control-label">Mot pass</label>

                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputpass" >
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputpass" class="col-sm-2 control-label">Confimation mot de pass</label>

                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputpass">
                    </div>
                  </div>


                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" class="btn btn-danger">Modifier</button>
                    </div>
                  </div>
                </form>
                <!-- The timeline -->

              </div>
              <!-- /.tab-pane -->


              <!-- /.tab-pane -->
            </div>
            <!-- /.tab-content -->
          </div>
          <!-- /.nav-tabs-custom -->
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
