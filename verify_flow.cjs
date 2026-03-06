const { chromium } = require('playwright');
const path = require('path');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    try {
        console.log('Navigating to http://localhost:5173/');
        await page.goto('http://localhost:5173/');
        await page.waitForLoadState('networkidle');

        // 1. Go to Adopt page
        console.log('Navigating to Adopt page...');
        await page.click('text=Adotar');
        await page.waitForURL('**/adopt');
        await page.screenshot({ path: 'verify_adopt_page_initial.png' });

        // 2. Test Filters
        console.log('Testing filters...');
        await page.click('button:has-text("Filtros")');
        await page.click('button:has-text("Gato")');
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'verify_filtered_cats.png' });

        // 3. View Pet Details
        console.log('Viewing pet details...');
        await page.click('text=Amora');
        await page.waitForURL('**/pet/6');
        await page.screenshot({ path: 'verify_pet_details.png' });

        // 4. Adoption Flow
        console.log('Starting adoption flow...');
        await page.click('text=Tenho Interesse em Adotar');
        await page.waitForSelector('text=Interesse em Amora');

        // Step 1
        await page.fill('[placeholder="Seu nome"]', 'Test User');
        await page.fill('[placeholder="seu@email.com"]', 'test@example.com');
        await page.click('button:has-text("Próximo Passo")');

        // Step 2
        await page.waitForSelector('text=Quase lá!');
        await page.fill('[placeholder="Conte-nos sua motivação..."]', 'Adoro gatos!');
        await page.click('button:has-text("Enviar Solicitação")');

        // Success
        await page.waitForSelector('text=Solicitação Enviada!');
        await page.screenshot({ path: 'verify_adoption_success.png' });

        console.log('Verification completed successfully!');
    } catch (error) {
        console.error('Verification failed:', error);
        process.exit(1);
    } finally {
        await browser.close();
    }
})();
