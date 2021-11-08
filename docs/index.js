const fs = require("fs");
const path = require("path");

function read(file = "", data = {}) {
    try {
        data = fs.readFileSync(file, "utf8");
    } catch (error) {
        write(data);
    }
    return data;
}

function write(file = "", data = {}) {
    var dir = path.dirname(file);
    try {
        fs.readdirSync(dir);
    } catch (error) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(file, data);
}

var readme = "";
readme += `# OtomaX Web Server\r\n`;
readme += `## Sumber daya\r\n`;
readme += `Untuk deskripsi sumber daya yang tersedia, lihat Tinjauan Sumber Daya.\r\n`;
fs.readdirSync("./api").forEach((dirName) => {
    readme += `### ${dirName}\r\n`;

    fs.readdirSync(`./api/${dirName}`).forEach((fileName) => {
        if (/^\.rest$/.test(path.extname(fileName))) {
            var str = fs.readFileSync(`./api/${dirName}/${fileName}`, "utf8");
            var data = str
                .replace(/\r/g, "")
                .replace(/\n/g, "\r\n")
                .split(/###/)
                .reduce((p, s, i) => {
                    if (s) {
                        var [title='', request = "", ...message] = s.split(/\r\n/);
                        title=title.trim()
                        var [method, url] = request.split(" ");
                        var { pathname, searchParams } = new URL(url);
                        var query = Object.fromEntries(searchParams.entries());
                        var [headers, ...body] = message.join("\r\n").split(/(\r\n){2}/);
                        if(!title) {
                            title=pathname.split('/').pop()
                            title=title.charAt(0).toUpperCase()+
                            title.slice(1).toLowerCase()
                        }

                        headers = headers.split(/\r\n/).reduce((prev, curr) => {
                            if (curr) {
                                var [name, ...value] = curr.split(": ");
                                prev[name] = value.join(": ");
                            }
                            return prev;
                        }, {});

                        try {
                            body = JSON.parse(body.join(""));
                        } catch (error) {
                            body = null;
                        }

                        var params = null

                        var doc = {
                            title,
                            method,
                            url,
                            pathname,
                            query,
                            headers,
                            body,
                        };


                        var detail = ''

                        detail+=(`# ${title}\r\n`)
                        detail+=(`\`\`\`http\r\n`)
                        detail+=(`${method} ${pathname}\r\n`)
                        detail+=(`\`\`\`\r\n`)
                        detail+=(`keterangan\r\n`)

                        detail+=(`## Properties\r\n`)

                        if(params) {
                            detail+=(`### Params\r\n`)
                            detail+=(`Nama | Tipe | Nilai | Keterangan\r\n`)
                            detail+=(`--- | --- | --- | ---\r\n`)
                            Object.keys(params).forEach((key) => {
                                detail+=(`<code>${key}</code> | String | null | null\r\n`)
                            })
                        }

                        if(query) {
                            detail+=(`### Query\r\n`)
                            detail+=(`Nama | Tipe | Nilai | Keterangan\r\n`)
                            detail+=(`--- | --- | --- | ---\r\n`)
                            Object.keys(query).forEach((key) => {
                                detail+=(`<code>${key}</code> | String | null | null\r\n`)
                            })
                        }

                        if(body) {
                            detail+=(`### Body\r\n`)
                            detail+=(`Nama | Tipe | Nilai | Keterangan\r\n`)
                            detail+=(`--- | --- | --- | ---\r\n`)
                            Object.keys(body).forEach((key) => {
                                detail+=(`<code>${key}</code> | String | null | null\r\n`)
                            })
                        }

                        detail+=(`## Contoh\r\n`)
                        detail+=(`### Request\r\n`)
                        detail+=(`\`\`\`http\r\n`)
                        detail+=(`${s.trim()}\r\n`)
                        detail+=(`\`\`\`\r\n`)

                        write(`./docs/${dirName}/${pathname.split('/').filter(name=>name).join('-')}.md`, detail)

                        p = p.find((d) => d.method === doc.method && d.pathname === doc.pathname) ? p : [...p, doc];
                    }
                    return p;
                }, []);

            readme += `#### ${fileName}\r\n`;
            readme += `${data
                .map(
                    ({ method, pathname }) =>
                        `- **[<code>${method}</code> ${pathname}](./docs/${dirName}/${pathname
                            .split("/")
                            .filter((n) => n)
                            .join("-")}.md)**`
                )
                .join("\r\n")}\r\n`;
        }
    });
});

write("./README.md", readme);
