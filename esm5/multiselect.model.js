var ListItem = /** @class */ (function () {
    function ListItem(source) {
        if (typeof source === 'string' || typeof source === 'number') {
            this.id = this.text = source;
            this.isDisabled = false;
        }
        if (typeof source === 'object') {
            this.id = source.id;
            this.text = source.text;
            this.isDisabled = source.isDisabled;
        }
    }
    return ListItem;
}());
export { ListItem };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlzZWxlY3QubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tdWx0aXNlbGVjdC1kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm11bHRpc2VsZWN0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQTtJQUtFLGtCQUFtQixNQUFXO1FBQzVCLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM1RCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFoQkQsSUFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElEcm9wZG93blNldHRpbmdzIHtcbiAgc2luZ2xlU2VsZWN0aW9uPzogYm9vbGVhbjtcbiAgaWRGaWVsZD86IHN0cmluZztcbiAgdGV4dEZpZWxkPzogc3RyaW5nO1xuICBkaXNhYmxlZEZpZWxkPzogc3RyaW5nO1xuICBlbmFibGVDaGVja0FsbD86IGJvb2xlYW47XG4gIHNlbGVjdEFsbFRleHQ/OiBzdHJpbmc7XG4gIHVuU2VsZWN0QWxsVGV4dD86IHN0cmluZztcbiAgYWxsb3dTZWFyY2hGaWx0ZXI/OiBib29sZWFuO1xuICBjbGVhclNlYXJjaEZpbHRlcj86IGJvb2xlYW47XG4gIG1heEhlaWdodD86IG51bWJlcjtcbiAgaXRlbXNTaG93TGltaXQ/OiBudW1iZXI7XG4gIGxpbWl0U2VsZWN0aW9uPzogbnVtYmVyO1xuICBzZWFyY2hQbGFjZWhvbGRlclRleHQ/OiBzdHJpbmc7XG4gIG5vRGF0YUF2YWlsYWJsZVBsYWNlaG9sZGVyVGV4dD86IHN0cmluZztcbiAgY2xvc2VEcm9wRG93bk9uU2VsZWN0aW9uPzogYm9vbGVhbjtcbiAgc2hvd1NlbGVjdGVkSXRlbXNBdFRvcD86IGJvb2xlYW47XG4gIGRlZmF1bHRPcGVuPzogYm9vbGVhbjtcbiAgYWxsb3dSZW1vdGVEYXRhU2VhcmNoPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIExpc3RJdGVtIHtcbiAgaWQ6IFN0cmluZyB8IG51bWJlcjtcbiAgdGV4dDogU3RyaW5nIHwgbnVtYmVyO1xuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioc291cmNlOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHNvdXJjZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMuaWQgPSB0aGlzLnRleHQgPSBzb3VyY2U7XG4gICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLmlkID0gc291cmNlLmlkO1xuICAgICAgdGhpcy50ZXh0ID0gc291cmNlLnRleHQ7XG4gICAgICB0aGlzLmlzRGlzYWJsZWQgPSBzb3VyY2UuaXNEaXNhYmxlZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==