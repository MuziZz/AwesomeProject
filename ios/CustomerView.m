//
//  CustomerView.m
//  AwesomeProject
//
//  Created by 李真真(80002457) on 2021/6/25.
//

#import "CustomerView.h"


@implementation CustomerView
RCT_EXPORT_MODULE();

//RCT_EXPORT_MODULE(log,setUserName:(NSString *)name)
//RCT_REMAP_METHOD(<#js_name#>, <#method#>)
RCT_EXPORT_METHOD(setUserName:(NSString *)username{
  NSLog(@"username:%@",username);
})

@end
