module.exports = function(plop) {
  // controller generator
  plop.setGenerator("getAll", {
    description:
      "Create a getAll route (create files for router, controller, manager, service, DAO)",
    prompts: [
      {
        type: "input",
        name: "resource",
        message:
          "Enter the resource name (ex : User, ChargeExploitation, etc...)"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/routes/{{ dotCase resource }}s.route.ts",
        templateFile: "plop-templates/getAll/template.route.ts.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "src/routes/index.route.ts",
        pattern: /\/\/ --APPEND PLOP ROUTE IMPORT HERE--/gi,
        template:
          'import { {{ pascalCase resource }}sRoute } from "./{{ dotCase resource }}s.route";'
      },
      {
        type: "append",
        path: "src/routes/index.route.ts",
        pattern: /\/\/ --APPEND PLOP ROUTE DECLARATION HERE--/gi,
        template:
          "  private {{ camelCase resource }}sRoute: {{ pascalCase resource }}sRoute;"
      },
      {
        type: "append",
        path: "src/routes/index.route.ts",
        pattern: /\/\/ --APPEND PLOP ROUTE CONSTRUCTOR HERE--/gi,
        template:
          "    this.{{ camelCase resource }}sRoute = new {{ pascalCase resource }}sRoute();"
      },
      {
        type: "append",
        path: "src/routes/index.route.ts",
        pattern: /\/\/ --APPEND PLOP ROUTE USE HERE--/gi,
        template:
          '    this.api.use("/{{ kebabCase resource }}s", this.{{ camelCase resource }}sRoute.getApi());'
      },
      {
        type: "add",
        path: "src/dao/{{ dotCase resource }}s.dao.ts",
        templateFile: "plop-templates/getAll/template.dao.ts.hbs",
        skipIfExists: true
      },
      {
        type: "add",
        path: "src/services/{{ dotCase resource }}s.service.ts",
        templateFile: "plop-templates/getAll/template.service.ts.hbs",
        skipIfExists: true
      },
      {
        type: "add",
        path: "src/managers/{{ dotCase resource }}s.manager.ts",
        templateFile: "plop-templates/getAll/template.manager.ts.hbs",
        skipIfExists: true
      },
      {
        type: "add",
        path: "src/controllers/{{ dotCase resource }}s.controller.ts",
        templateFile: "plop-templates/getAll/template.controller.ts.hbs",
        skipIfExists: true
      }
    ]
  });

  plop.setGenerator("getById", {
    description:
      'Add a route "getById" (update files router, controller, manager, service & DAO)',
    prompts: [
      {
        type: "input",
        name: "resource",
        message:
          "Enter the resource name (ex : Users, ChargeExploitations, etc...)"
      }
    ],
    actions: [
      {
        type: "append",
        path: "src/routes/{{ dotCase resource }}s.route.ts",
        pattern: /\/\/ --APPEND PLOP ROUTE HERE--/gi,
        templateFile: "plop-templates/getById/template.route.ts.hbs"
      },
      {
        type: "append",
        path: "src/controllers/{{ dotCase resource }}s.controller.ts",
        pattern: /\/\/ --APPEND PLOP CONTROLLER HERE--/gi,
        templateFile: "plop-templates/getById/template.controller.ts.hbs"
      },
      {
        type: "append",
        path: "src/managers/{{ dotCase resource }}s.manager.ts",
        pattern: /\/\/ --APPEND PLOP MANAGER HERE--/gi,
        templateFile: "plop-templates/getById/template.manager.ts.hbs"
      },
      {
        type: "append",
        path: "src/services/{{ dotCase resource }}s.service.ts",
        pattern: /\/\/ --APPEND PLOP SERVICE HERE--/gi,
        templateFile: "plop-templates/getById/template.service.ts.hbs"
      },
      {
        type: "append",
        path: "src/dao/{{ dotCase resource }}s.dao.ts",
        pattern: /\/\/ --APPEND PLOP DAO HERE--/gi,
        templateFile: "plop-templates/getById/template.dao.ts.hbs"
      }
    ]
  });

  plop.setGenerator("updateById", {
    description:
      'Add a route "updateById" (update files router, controller, manager, service & DAO)',
    prompts: [
      {
        type: "input",
        name: "resource",
        message:
          "Enter the resource name (ex : Users, ChargeExploitations, etc...)"
      }
    ],
    actions: [
      {
        type: "append",
        path: "src/routes/{{ dotCase resource }}s.route.ts",
        pattern: /\/\/ --APPEND PLOP ROUTE HERE--/gi,
        templateFile: "plop-templates/updateById/template.route.ts.hbs"
      },
      {
        type: "append",
        path: "src/controllers/{{ dotCase resource }}s.controller.ts",
        pattern: /\/\/ --APPEND PLOP CONTROLLER HERE--/gi,
        templateFile: "plop-templates/updateById/template.controller.ts.hbs"
      },
      {
        type: "append",
        path: "src/controllers/{{ dotCase resource }}s.controller.ts",
        pattern: /\/\/ --APPEND PLOP CONTROLLER IMPORT HERE--/gi,
        template: "import { InvalidParameterException } from \"../types/exceptions/invalidparameter.exception\";"
      },
      {
        type: "append",
        path: "src/managers/{{ dotCase resource }}s.manager.ts",
        pattern: /\/\/ --APPEND PLOP MANAGER HERE--/gi,
        templateFile: "plop-templates/updateById/template.manager.ts.hbs"
      },
      {
        type: "append",
        path: "src/services/{{ dotCase resource }}s.service.ts",
        pattern: /\/\/ --APPEND PLOP SERVICE HERE--/gi,
        templateFile: "plop-templates/updateById/template.service.ts.hbs"
      },
      {
        type: "append",
        path: "src/dao/{{ dotCase resource }}s.dao.ts",
        pattern: /\/\/ --APPEND PLOP DAO HERE--/gi,
        templateFile: "plop-templates/updateById/template.dao.ts.hbs"
      }
    ]
  });

  plop.setGenerator("create", {
    description:
      'Add a route "create" (update files router, controller, manager, service & DAO)',
    prompts: [
      {
        type: "input",
        name: "resource",
        message:
          "Enter the resource name (ex : Users, ChargeExploitations, etc...)"
      }
    ],
    actions: [
      {
        type: "append",
        path: "src/routes/{{ dotCase resource }}s.route.ts",
        pattern: /\/\/ --APPEND PLOP ROUTE HERE--/gi,
        templateFile: "plop-templates/create/template.route.ts.hbs"
      },
      {
        type: "append",
        path: "src/controllers/{{ dotCase resource }}s.controller.ts",
        pattern: /\/\/ --APPEND PLOP CONTROLLER HERE--/gi,
        templateFile: "plop-templates/create/template.controller.ts.hbs"
      },
      {
        type: "append",
        path: "src/managers/{{ dotCase resource }}s.manager.ts",
        pattern: /\/\/ --APPEND PLOP MANAGER HERE--/gi,
        templateFile: "plop-templates/create/template.manager.ts.hbs"
      },
      {
        type: "append",
        path: "src/services/{{ dotCase resource }}s.service.ts",
        pattern: /\/\/ --APPEND PLOP SERVICE HERE--/gi,
        templateFile: "plop-templates/create/template.service.ts.hbs"
      },
      {
        type: "append",
        path: "src/dao/{{ dotCase resource }}s.dao.ts",
        pattern: /\/\/ --APPEND PLOP DAO HERE--/gi,
        templateFile: "plop-templates/create/template.dao.ts.hbs"
      },
      {
        type: "append",
        path: "src/dao/{{ dotCase resource }}s.dao.ts",
        pattern: /\/\/ --APPEND PLOP DAO IMPORT HERE--/gi,
        template: "import { ConflictException } from \"../types/exceptions/conflict.exception\";"
      },
      {
        type: "modify",
        path: "src/dao/{{ dotCase resource }}s.dao.ts",
        pattern: /import { AxiosResponse }/,
        template: "import { AxiosError, AxiosResponse }"
      }
    ]
  });

  plop.setGenerator("deleteById", {
    description:
      'Add a route "deleteById" (update files router, controller, manager, service & DAO)',
    prompts: [
      {
        type: "input",
        name: "resource",
        message:
          "Enter the resource name (ex : Users, ChargeExploitations, etc...)"
      }
    ],
    actions: [
      {
        type: "append",
        path: "src/routes/{{ dotCase resource }}s.route.ts",
        pattern: /\/\/ --APPEND PLOP ROUTE HERE--/gi,
        templateFile: "plop-templates/deleteById/template.route.ts.hbs"
      },
      {
        type: "append",
        path: "src/controllers/{{ dotCase resource }}s.controller.ts",
        pattern: /\/\/ --APPEND PLOP CONTROLLER HERE--/gi,
        templateFile: "plop-templates/deleteById/template.controller.ts.hbs"
      },
      {
        type: "append",
        path: "src/managers/{{ dotCase resource }}s.manager.ts",
        pattern: /\/\/ --APPEND PLOP MANAGER HERE--/gi,
        templateFile: "plop-templates/deleteById/template.manager.ts.hbs"
      },
      {
        type: "append",
        path: "src/services/{{ dotCase resource }}s.service.ts",
        pattern: /\/\/ --APPEND PLOP SERVICE HERE--/gi,
        templateFile: "plop-templates/deleteById/template.service.ts.hbs"
      },
      {
        type: "append",
        path: "src/dao/{{ dotCase resource }}s.dao.ts",
        pattern: /\/\/ --APPEND PLOP DAO HERE--/gi,
        templateFile: "plop-templates/deleteById/template.dao.ts.hbs"
      },
      {
        type: "append",
        path: "src/dao/{{ dotCase resource }}s.dao.ts",
        pattern: /\/\/ --APPEND PLOP DAO IMPORT HERE--/gi,
        template: "import { DataNotFoundException } from \"../types/exceptions/datanotfound.exception\";\nimport { ForbiddenException } from \"../types/exceptions/forbidden.exception\";"
      }
    ]
  });
};
