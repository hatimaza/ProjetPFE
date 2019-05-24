<template>
    <div class="container">
      <section class="content-header">
      <h1>
        Détail du collaborateur

      </h1>
      <ol class="breadcrumb">
        <li><a href="index.html"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="detailcollaborateur.html">Détail du collaborateur</a></li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
          <div class="col-md-12">
              <!-- Profile Image -->
              <div class="box box-primary">
                <div class="box-body box-profile">
                  <img class="profile-user-img img-responsive img-circle" src="dist/img/user2-160x160.jpg" alt="User profile picture">
    
                  <h3 class="profile-username text-center">Hatim Aza</h3>
    
                  <p class="text-muted text-center">Developpeur en PHP</p>
    
                  <ul class="list-group list-group-unbordered">
                    <li class="list-group-item">
                      <b>Email</b> <a class="pull-right">Hatim.aza@gmail.com</a>
                    </li>
                    <li class="list-group-item">
                      <b>telephone</b> <a class="pull-right">0622414160</a>
                    </li>
                    <li class="list-group-item">
                      <b>login</b> <a class="pull-right">hatim10</a>
                    </li>
                  </ul>
    
                  <div class="box-footer text-black">
                      <div class="row">
                        <div class="col-sm-12">
                            <div class="clearfix">
                                <span class="pull-left">Score </span>
                                <small class="pull-right">80%</small>
                              </div>
                              <div class="progress xs">
                                <div class="progress-bar progress-bar-green" style="width: 80%;"></div>
                              </div>
                            </div>
                      </div>
                   </div>
                </div>
                <!-- /.box-body -->
              </div>
              <!-- /.box -->
    
              <!-- About Me Box -->
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Plus info</h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
  
                  <strong><i class="fa fa-map-marker margin-r-5"></i>Adresse</strong>
    
                  <p class="text-muted">Marrakech </p>
    
                  <hr>
    
                  <strong><i class="fa fa-pencil margin-r-5"></i>Specialités</strong>
    
                  <p>
                    <span class="label label-danger">Desinger </span>
                    <span class="label label-success">JavaEE</span>
                    <span class="label label-info">Javascript</span>
                    <span class="label label-warning">PHP</span>
                    <span class="label label-primary">Vue.js</span>
                  </p>
    
                  <hr>
    
                  
                </div>
                <!-- /.box-body -->
              </div>
              <!-- /.box -->
            </div>
          <!-- /.box -->


          <!-- /.box -->
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
