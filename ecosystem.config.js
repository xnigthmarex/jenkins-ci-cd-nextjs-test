module.exports = {
    apps: [
      {
        name: "nextjs-app",
        script: "npm",
        args: "start",
        cwd: "/var/jenkins_home/workspace/TEST",
        env: {
          NODE_ENV: "production"
        }
        
      }
    ]
  };
  