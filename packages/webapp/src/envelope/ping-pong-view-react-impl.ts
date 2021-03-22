/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { init } from "ping-pong-view/dist/envelope";
import { EnvelopeBusMessage } from "@kogito-tooling/envelope-bus/dist/api";
import { PingPongReactImplFactory } from "ping-pong-view-react";
import { ContainerType } from "@kogito-tooling/envelope/dist/api";

init({
  container: document.getElementById("envelope-app")!,
  envelopeConfig: { containerType: ContainerType.IFRAME },
  bus: {
    postMessage<D, Type>(message: EnvelopeBusMessage<D, Type>, targetOrigin?: string, transfer?: any) {
      window.parent.postMessage(message, "*", transfer);
    },
  },
  pingPongViewFactory: new PingPongReactImplFactory(),
});
