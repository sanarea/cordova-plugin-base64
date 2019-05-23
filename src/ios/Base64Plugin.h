//
//  Base64Plugin.h
//  PhonegapLiferay
//
//  Created by Horelvis 15/04/2019.
//

#import <Cordova/CDVPlugin.h>
#import <objc/runtime.h>



@interface Base64Plugin :  CDVPlugin{
}

@property (copy) NSString* callbackId;

- (void)encodeFile:(CDVInvokedUrlCommand*)command;


@end
