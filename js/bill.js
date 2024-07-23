const categories = [{
    id : "C1",
    categoryName : "Platters",
    superCategory : {
  
      superCategoryName : "South Indian",
      id : "SC1"
    }
  }];
  
  const menu = [{ id : "item1",
      itemName : "Butter Roti",
      rate : 20,
      taxes : [
        {
          name : "Service Charge",
          rate : 10,
          isInPercent : false
        }, {
          name : "GST",
          rate : 5,
          isInPercent : true
        }
      ],
      category : {
        categoryId : "C2"
      }
  
    },{ id : "item2",
        itemName : "Paneer ",
        rate : 240,
        taxes : [
          {
            name : "Service Charge",
            rate : 10,
            isInPercent : false
          }
        ],
        category : {
          categoryId : "C2"
        }
    
      }];
  
  bill = { id : "B1",
    billNumber : 1,
    opentime : "06 Nov 2020 14:19",
    customerName : "CodeQuotient",
    billItems : [
      {
        id : "item2",
        quantity : 3,
        discount : {
          rate : 10,
          isInPercent : true
        }
  
      },
      {
        id : "item1",
        quantity : 4,
        discount : {
          rate : 10,
          isInPercent : true
        }
  
      }
    ]
  };
  
  function calculateBill(bill)
  {

    bill.billItems.forEach(function(element)  {
       
        //Reference to Item
        let item=getMenu(element.id);
        console.log(item.itemName)
        //Discount based on rate

        //Acutal rate after taxes

        //Rate * quantity

        //TotalBillAmount add
        //console.log(name,element.quantity);

        //console.log(element.id,element.quantity);

    });

  }
  function getMenu(id)
  {
    //console.log(id);
    let results=menu.filter(function(item){
        if(item.id==id)
            return true;
    })
    //console.log(results);
    return results[0];


  }
  calculateBill(bill)
