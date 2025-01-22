from pr_agent import cli
from pr_agent.config_loader import get_settings

def main():
    # Gerekli değerleri doldurun
    provider = "github"  # github/gitlab/bitbucket/azure_devops
    user_token = "YOUR_GITHUB_TOKEN"  # GitHub token
    openai_key = "YOUR_OPENAI_KEY"    # OpenAI API key
    pr_url = "https://github.com/Emresahurtekin/ladle/pull/YOUR_PR_NUMBER"  # PR URL
    command = "/review"  # Command to run

    # Konfigürasyonları ayarla
    get_settings().set("CONFIG.git_provider", provider)
    get_settings().set("openai.key", openai_key)
    get_settings().set("github.user_token", user_token)

    # Komutu çalıştır
    cli.run_command(pr_url, command)

if __name__ == '__main__':
    main() 