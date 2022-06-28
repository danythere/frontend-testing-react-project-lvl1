import { program } from "commander"
import pageLoader from "../pageLoader"


program.command('save')
    .description('saving a page to the current audience')
    .argument('<href>', 'link of saving page').action(async (href) => {
        console.log(href)
        await pageLoader(href);
    })

program.parse();