namespace server.Api.ViewModels
{
    public class AuthData
    {
        public string Token { get; set; }
        public long TokenExporationTime { get; set; }
        public string Id { get; set; }
    }
}
