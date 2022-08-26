describe('My Login application', async() => 
{
   xit('should login with valid credentials', async () => 
    {//promise pending resolved,rejected
      await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
       console.log(await browser.getTitle())
       expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
       await $("input[name='username']").setValue("rahulshettyacademy")
       await $("#username").setValue("secondCSS")
       await browser.pause(3000)
       const password = $("//input[@type='password']")
       await password.setValue("learning")
       await $("#signInBtn").click()
       await console.log(await $(".alert-danger").getText())
    //   await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value') === 'Sign In',
    //    {
    //        timeout: 5000,
    //        timeoutMsg: 'Error message is not showing up'
    //    })
    //    await console.log(await $(".alert-danger").getText())
       await expect($("p")).toHaveTextContaining("username is rahulshettyacademy and Password is learning")   
    });

    it('Login Dashboard', async () => 
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
       console.log(await browser.getTitle())
       expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
       await $("input[name='username']").setValue("rahulshettyacademy")
       const password = $("//input[@type='password']")
       await password.setValue("learning")
       await $("#signInBtn").click()
       console.log(await $(".btn-primary").waitForExist())
       await expect(browser).toHaveUrlContaining("shop")
       await expect(browser).toHaveTitleContaining("ProtoCommerce")
       await browser.saveRecordingScreen("recording.mpeg")


    });
});


