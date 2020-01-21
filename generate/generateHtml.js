module.exports = function generateHTML(managerArr, engineerArr, interArr) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cyborg/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title> Employee Summary App </title>
</head>
<body>
    <div class="container">
        <div class="jumbotron">
            <h1 class="text-center"> The Dream Team! </h1>
            <h2 class="text-muted text-center"> STARRING.... </h2>
            <hr>
        </div>


        <div class="row justify-content-center mb-5">
        
            ${managerArr.map(manager =>
            `<div class="card col-3">
                    <div class="card-header">
                        <h3><strong> ${manager.name}</strong></h3>
                        <h3><strong> The Boss </strong></h3>
                    </div>
                <div class="card-body">
                    <div>
                    <h5><strong> Office Number Number: </strong> <span> ${manager.officeNumber} </span></h5>
                    <h5><strong> Email: </strong> <span>${manager.email} </span></h5>
                    <h5><strong> ID Number: </strong> <span>${manager.id}  </span></h5>
                    </div>
                </div>
            </div>`.trim()).join("")}
        </div>

                

        <div class="row justify-content-center mb-5">   

            ${engineerArr.map(engineer =>
                `<div class="card col-3 m-1">
                    <div class="card-header">
                        <h3><strong> ${engineer.name} </strong></h3>
                        <h3><strong> The Architect </strong></h3>
                    </div>
                    <div class="card-body">
                        <div>
                            <h5><strong> GitHub username: </strong> <span> ${engineer.github} </span></h5>
                            <h5><strong> Email: </strong> <span> ${engineer.email} </span></h5>
                            <h5><strong> ID Number: </strong> <span> ${engineer.id} </span></h5>
                        </div>
                    </div>
                </div>`.trim()).join("")}    
        </div>
                



        <div class="row justify-content-center mb-5">

            ${interArr.map(intern =>
                `<div class="card col-3 m-1">
                    <div class="card-header">
                        <h3><strong> ${intern.name} </strong></h3>
                        <h3><strong>  The Beginner </strong></h3>
                    </div>
                    <div class="card-body">
                        <div>
                        <h5><strong> Studying at the Prestigious:</strong> <span> ${intern.school} </span></h5>
                        <h5><strong> Email: </strong> <span> ${intern.email} </span></h5>
                        <h5><strong> ID Number:</strong> <span> ${intern.id} </span></h5>
                        </div>
                    </div>
                </div>`.trim()).join("")}
        </div> 
    
    </div> 


</body>
</html>`
}