import React from 'react'
import MaterialTable from 'material-table'

function Dashboard() {
  const data=[
    {nom:'Oumer',prenom:'Maliha',age:20,date:15/10/2022,heure:8,motif:'plombage'},
    {nom:'kaddour',prenom:'said',age:20,date:15/10/2022,heure:8,motif:'plombage'},
    {nom:'khiat',prenom:'faycal',age:20,date:15/10/2022,heure:8,motif:'plombage'},
    {nom:'Oumar',prenom:'malak',age:20,date:15/10/2022,heure:8,motif:'plombage'}
    
  ]
  const columns=[
    {
    title:'Nom',field:'nom',filterPlaceholder:'Entrez un nom',headerStyle:{color:"white"},headerStyle:{background:"rgb(0, 212, 212)"}
    },
    {
      title:'Prénom',field:'prenom',filterPlaceholder:'Entrez un prénom',headerStyle:{color:"white"},headerStyle:{background:"rgb(0, 212, 212)"}
      },
    {
      title:'Age',field:'age', type: 'numeric' , filtering:false,headerStyle:{color:"white"},headerStyle:{background:"rgb(0, 212, 212)"}
      },
      {
        title:'Date',field:'date', type: 'date', defaultSort: "asc",filterPlaceholder:'Entrez une date',headerStyle:{color:"white"},headerStyle:{background:"rgb(0, 212, 212)"}
        },
        {
          title:'Heure',field:'heure', type: 'time', defaultSort: "asc",filterPlaceholder:'Entrez lheure',headerStyle:{color:"white"},headerStyle:{background:"rgb(0, 212, 212)"}
          },
          {
            title:'Motif de Consultation',field:'motif',headerStyle:{color:"white"},headerStyle:{background:"rgb(0, 212, 212)"}
            }
  ]
  return (
    <div>
      <MaterialTable title="Mon agenda"
      editable={{
        onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
          //setTableData([...tableData,newRow])
          resolve()
          setTimeout(()=>resolve,500)

        }),
        onRowUpdate:(newRow,oldRow)=>new Promise((resolve,reject)=>{
          setTimeout(()=>resolve,500)
        }),
        onRowDelete:(selectedRow)=>new Promise((resolve,reject)=>{
          setTimeout(()=>resolve,1000)

        }),
        //headerStyle:(background:"rgb(0, 212, 212)",fontStyle:'italic')
      }}
      
      data={data}
      columns={columns}
      options={{
        sorting:false,
        search:true,
        paging:false,
        filtering:true,
        exportButton:true,
        paging:true,
        paginationType:"stepped",
        exportAllData:true,
        actionsColumnIndex:-1,
        selection: true,
        
        
        
      }}
      
      />
    </div>
  )
}

export default Dashboard
