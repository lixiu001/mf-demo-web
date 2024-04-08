export function assetUrl(url: string): string {
  debugger
  if (!(window as any).__DW_MFA_ENV__) {
    return url;
  }

  // @ts-ignore
  const publicPath = __webpack_public_path__;
  console.log('publicPath:',publicPath);
  
  const urlPrefix = publicPath.endsWith('/') ? '' : url.startsWith('/') ? '' : '/';

  if (publicPath.endsWith('/') && url.startsWith('/')) {
    url = url.substring(1);
  }

  return `${publicPath}${urlPrefix}${url}`;
}
