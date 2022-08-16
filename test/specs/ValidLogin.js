const chaiexpect=require('chai').expect   
describe('My Login application', async() => 
{
   xit(' login with valid credentials', async () => 
    {//promise pending resolved,rejected
      await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
       console.log(await browser.getTitle())
       expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
       await $("input[name='username']").setValue("rahulshettyacademy")
       await browser.pause(3000)
       const password = $("//input[@type='password']")
       await password.setValue("learning")
       await $("#signInBtn").click()
      
    });

    it('Login Dashboard', async () => 
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
       console.log(await browser.getTitle())
       expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
       await $("input[name='username']").setValue("rahulshettyacademy")
       const password = $("//input[@type='password']")
       await password.setValue("learning")

       //Radio Button
        const radiobtn=await $$(".customradio")
        const userradiobtn=await radiobtn[1]
        await userradiobtn.click()
        const modal=await $(".modal-body")

        //Pop Up
        await modal.waitForDisplayed()
        const okaybtn=await $("#okayBtn")
        await okaybtn.click()

        //Dynamic dropdown
        const dropdown=await $("select.form-control")
        dropdown.selectByVisibleText("Teacher")
        await browser.pause(3000)
        await dropdown.selectByIndex(0)
        await browser.pause(3000)
        await dropdown.selectByAttribute('value','teach')
        await browser.pause(3000)
        console.log(await dropdown.getValue())

      //use Chai assertion to compare two strings.
      chaiexpect(await dropdown.getValue()).to.equal("teach")


       await $("#signInBtn").click()
       console.log(await $(".btn-primary").waitForExist())
       await expect(browser).toHaveUrlContaining("shop")
       await expect(browser).toHaveTitleContaining("ProtoCommerce")
    });
});


