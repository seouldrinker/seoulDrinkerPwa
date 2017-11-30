
let isSubscribed = false;
let swRegistration = null;

const applicationServerPublicKey = 'BLNk7puVbp-ItqU_xoiTr8H9NTW8rK1fRq5Mc' +
  '-hwvK9zEJbZGPK7FDgFkIzzTloCyXIThbGrj0PyNiHJZDD9cys';

// subscribe 상태 체크 후 버튼 활성화
function updateBtn() {
  const pushButtonImage = document.querySelectorAll('.push-btn img');
  if (isSubscribed) {
    pushButtonImage[0].style.display = 'none';
    pushButtonImage[1].style.display = 'inline-block';
  } else {
    pushButtonImage[0].style.display = 'inline-block';
    pushButtonImage[1].style.display = 'none';
  }

  if (Notification.permission === 'denied') {
    alert('알림 권한이 거부되어있습니다. 풀어주세요~');
    return;
  }
}

// subscribe 상태 체크
function initializeUI() {
  const pushButton = document.querySelector('.push-btn');
  pushButton.addEventListener('click', function() {
    isSubscribed ? unsubscribeUser() : subscribeUser();
  });

  swRegistration.pushManager.getSubscription()
  .then(function(subscription) {
    isSubscribed = !(subscription === null);

    if (isSubscribed) {
      console.log('User IS subscribed.');
    } else {
      console.log('User is NOT subscribed.');
    }

    updateBtn();
  });
}

function subscribeUser() {
  // 인코딩된 애플리케이션 서버의 공개 키
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  // subscribe 정보 요구.
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,    // 푸시 전송시 항상 알림을 표시할 권한
    applicationServerKey: applicationServerKey
  })
  .then(function(subscription) {
    console.log('User is subscribed:', subscription);

    isSubscribed = true;

    updateBtn();
  })
  .catch(function(err) {
    console.log('Failed to subscribe the user: ', err);
    updateBtn();
  });
}

function unsubscribeUser() {
  // 현재 subscribe 정보를 가져옴.
  swRegistration.pushManager.getSubscription()
  .then(function(subscription) {
    console.log(subscription);
    if (subscription) {
      return subscription.unsubscribe().then(function (successful) {
        console.log('User is unsubscribed.');

        // 서버에서 지워야 하기 때문에 여기서는 눌러도 권한이 바뀌지 않음.
        // TODO: Tell application server to delete subscription

        isSubscribed = false;

        updateBtn();
      });
    }
  })
  .catch(function(error) {
    console.log('Error unsubscribing', error);
  })
}

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors.
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  window.addEventListener('load', function() {
    if ('serviceWorker' in navigator && 'PushManager' in window &&
      (window.location.protocol === 'https:' || isLocalhost)) {
      console.log('Service Worker and Push is supported');

      navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
        console.log('Service Worker is registered', registration);
        swRegistration = registration;

        initializeUI();

      }).catch(function(error) {
        console.error('Service Worker Error', error);
      });
    } else {
      console.warn('Push messaging is not supported');
    }
  });
})();
