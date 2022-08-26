const chaiexpect=require('chai').expect   
describe('My Login application', async() => 
{
   xit('Dynamic dropdown list ', async () => 
    {//promise pending resolved,rejected
      await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
       console.log(await browser.getTitle())
       await expect(browser).toHaveTitleContaining("Practice Page")
       await $("#autocomplete").setValue("ind")
       let items=await $$("[class='ui-menu-item'] div")
       for(let i=0;i<await items.length;i++){
          console.log(await items[i].getText())
          if(await items[i].getText()==="India"){
            await items[i].click()
          }
          await console.log("clicked")
       }
    })
    it('checkbox validation', async () => {
      await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
      const checkboxitems=await $$("input[type='checkbox']")
      await checkboxitems[1].click()
       console.log("Is the second checkbox selected:?"+await checkboxitems[1].isSelected())
       console.log("Is the third checkbox selected:?"+await checkboxitems[2].isSelected())
     await browser.saveScreenshot("screenshot.png")
    })
    })


