
import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from '.';

storiesOf('Button', module)
.add('default', () => <Button>{'Button'}</Button>)
.add('second', () => <Button>{'Button2'}</Button>);