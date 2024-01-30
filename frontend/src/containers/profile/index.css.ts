import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { defaultWrapper, flex } from '@/styles/common.css';
import { contentWrapper } from '@/styles/wrapper.css';
import { vars } from '@/styles/vars.css';

import { UserProfileImage } from '@/components/UserPreview/UserProfileImage';

export const profileWrapper = style([
  defaultWrapper({ height: 'max' }),
  contentWrapper({ contentArea: 'headerAndNavBar' }),
  {
    '@media': {
      'screen and (min-width: 480px)': {
        width: '480px',
      },
    },
  },
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
]);

export const profileContentWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const profileText = recipe({
  base: {
    color: vars.colors.black,
    padding: vars.space['2x'],
  },
  variants: {
    contentType: {
      card: {},
      title: {
        fontSize: vars.fontSize['3x'],
        fontWeight: vars.fontWeight.accent,
      },
      content: {
        fontSize: vars.fontSize['2x'],
        padding: vars.space['1x'],
      },
    },
  },
});

export const userProfileWrapper = style([
  flex({ align: 'center', justify: 'center' }),
  {
    '@media': {
      'screen and (min-width: 480px)': {
        width: 480,
      },
    },
    padding: vars.space['4x'],
    position: 'static',
    gap: vars.space['4x'],
    top: '80px',
  },
]);

export const profileImage = style([
  flex({ justify: 'center' }),
  {
    width: '64px',
    height: '64px',
    borderRadius: vars.borderRadius.full,
    backgroundColor: vars.colors.whitesmoke,
  },
]);

export const profileDetails = style({
  display: 'flex',
  flexDirection: 'column',
  // 여기에 필요한 기타 스타일 추가
});

export const usernameAndSettings = style([
  flex({ align: 'center' }),
  {
    gap: vars.space['1x'],
  },
]);

export const username = style({
  flexGrow: 0,
  width: 'auto',
});

export const settingsButton = style({
  width: '24px',
  height: '24px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
});

export const followInfo = style([
  flex({ align: 'center' }),
  {
    gap: vars.space['2x'],
    marginTop: vars.space['2x'],
  },
]);

export const followerBox = style({
  display: 'inline-block',
  marginRight: vars.space['0.5x'],
});

export const followingBox = style({
  display: 'inline-block',
  marginLeft: vars.space['5x'],
  marginRight: vars.space['0.5x'],
});

export const number = style({
  width: 'auto',
});

export const profileNoContentStyle = style([
  {
    width: '100svw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
]);

export const noCardWrapper = style({
  marginTop: vars.space['4x'],
});

export const bottomNav = style({
  width: '100svw',
  height: 'auto',
});
