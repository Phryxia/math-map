# Polar 부호

# 개요

**Polar 부호(polar code)** 는 잡음 있는 채널 여러 개를 섞어, 거의 완벽한 채널과 거의 쓸모없는 채널로 갈라지게 만든 뒤 완벽한 쪽으로만 정보를 보내는 오류정정부호다. 비트의 절반을 지우는 채널로 비트 두 개를 보낼 때, 하나를 다른 하나에 더해 보내면 한 비트는 더 자주 지워지고 다른 비트는 덜 지워진다. 이 섞기를 되풀이하면 지워질 확률이 $0$ 이나 $1$ 에 가까운 비트만 남고, $0$ 에 가까운 비트의 비율이 [채널 부호화 정리](channel-coding.md)의 용량에 다가간다.

# 직관

이진 소거 채널(binary erasure channel)은 보낸 비트를 확률 $\varepsilon$ 로 지우고, 지우지 않으면 그대로 전한다. $\varepsilon=0.5$ 인 채널로 비트 $u\_1,u\_2$ 를 보낸다. 그대로 보내면 두 비트가 각각 확률 $0.5$ 로 지워진다.

대신 $x\_1=u\_1\oplus u\_2$ 와 $x\_2=u\_2$ 를 보낸다. $\oplus$ 는 2 로 나눈 나머지의 덧셈이다. 받는 쪽은 $u\_1$ 을 먼저 복원한다. $u\_1=x\_1\oplus x\_2$ 이므로 둘 중 하나라도 지워지면 $u\_1$ 을 모르고, 그 확률은 $1-0.5^2=0.75$ 다.

$u\_1$ 을 알고 나면 $u\_2$ 는 $x\_2$ 로도, $x\_1\oplus u\_1$ 로도 얻는다. 둘 다 지워질 때만 모르므로 그 확률은 $0.5^2=0.25$ 다. 한 비트는 나빠지고($0.75$) 한 비트는 좋아졌다($0.25$).

같은 섞기를 두 쌍에 다시 쓰면 네 비트의 지워질 확률이 $0.9375$, $0.5625$, $0.4375$, $0.0625$ 가 되고, 한 번 더 쓰면 여덟 비트가 $0.9961$ 에서 $0.0039$ 까지 퍼진다. 비트 $1024$ 개까지 섞으면 $37.3$ 퍼센트는 지워질 확률이 $0.01$ 보다 작고, 다른 $37.3$ 퍼센트는 $0.99$ 보다 크다. 좋은 쪽 비트에만 정보를 싣고 나쁜 쪽 비트는 $0$ 으로 고정한다.

# 정의

$N=2^n$ 이고 다음 행렬 $F$ 의 $n$ 번 [Kronecker 곱](kronecker-product.md)을 $G\_N=F^{\otimes n}$ 이라 한다.

$$
F=\begin{pmatrix}1&0\cr 1&1\end{pmatrix}
$$
 길이 $N$ 의 비트열 $u$ 를 $x=uG\_N$ 으로 보내는 변환을 **polar 변환** 이라 한다. 직관 절의 $(x\_1,x\_2)=(u\_1\oplus u\_2,u\_2)$ 가 $N=2$ 인 경우다.

```javascript
function polarTransform(u) { // u 의 길이는 2 의 거듭제곱
  const x = u.slice();
  for (let h = 1; h < x.length; h *= 2)
    for (let i = 0; i < x.length; i += 2 * h)
      for (let j = i; j < i + h; j++) x[j] ^= x[j + h];
  return x; // x = u G_N
}
```

채널 $W$ 를 $N$ 번 쓰고 $u\_1,\dots,u\_{i-1}$ 을 안다고 할 때 $u\_i$ 에서 받은 신호 $y$ 까지의 채널을 $i$ 번째 **합성 채널(synthesized channel)** $W\_N^{(i)}$ 라 한다. 합성 채널 가운데 좋은 $K$ 개의 위치 집합 $\mathcal A$ 를 고르고, $\mathcal A$ 밖의 $u\_i$ 를 $0$ 으로 고정한 다음 부호를 부호율 $K/N$ 의 **polar 부호** 라 한다.

$$
\bigl\lbrace uG\_N:\thinspace u\_i=0\thinspace\text{ for all }i\notin\mathcal A\bigr\rbrace
$$
 $\mathcal A$ 밖의 비트를 고정 비트(frozen bit)라 한다.

받는 쪽은 $i=1,\dots,N$ 의 순서로, 고정 비트는 $0$ 으로 두고 나머지는 $y$ 와 앞서 정한 $\hat u\_1,\dots,\hat u\_{i-1}$ 로 가장 그럴듯한 값을 고른다. 이것을 **연속 소거 복호(successive cancellation decoding)** 라 한다.

# 성질

## 소거 채널의 점화식

정리. $W$ 가 지울 확률 $z$ 인 소거 채널이면, 한 번 섞은 두 합성 채널은 지울 확률이 다음과 같은 소거 채널이다[^1].

$$
z^-=2z-z^2,\qquad z^+=z^2
$$

증명은 직관 절의 계산과 같다. $u\_1$ 은 두 출력이 모두 남아야 복원되고, $u\_2$ 는 하나만 남아도 복원된다. 두 채널의 용량의 합은 $(1-z^-)+(1-z^+)=2(1-z)$ 이므로 섞어도 용량의 합은 그대로다.

## 양극화 정리

정리. $W$ 가 대칭인 이진 입력 무기억 채널이고 용량이 $C$ 이면, 모든 $\delta\gt 0$ 에 대해 $N\to\infty$ 에서 용량이 $1-\delta$ 보다 큰 합성 채널의 비율은 $C$ 로, $\delta$ 보다 작은 것의 비율은 $1-C$ 로 간다[^1].

증명의 요지. 섞기를 한 번 할 때마다 $-$ 와 $+$ 를 같은 확률로 고르는 무작위 과정으로 보면, 합성 채널의 용량은 위의 보존 관계 때문에 유계인 [Martingale](martingales.md)이다. Martingale 수렴 정리로 극한이 있고, 극한에서 섞기가 용량을 바꾸지 않는 채널은 용량이 $0$ 이나 $1$ 인 것뿐이다.

## 오류 확률과 복잡도

부호율이 $C$ 보다 작고 $\beta\lt 1/2$ 이면, 연속 소거 복호의 블록 오류 확률은 $O(2^{-N^\beta})$ 다[^2]. 부호화와 연속 소거 복호는 모두 $O(N\log N)$ 번의 연산으로 한다. Polar 부호는 복호가 다항식 시간인 부호로 대칭 이진 입력 채널의 용량을 처음으로 달성했다[^1].

## Reed–Muller 부호와의 관계

[Reed–Muller 부호](reed-muller-codes.md)의 생성 행렬도 $G\_N$ 의 행들로 이루어진다. Reed–Muller 부호는 무게가 큰 행을 고르고, polar 부호는 대응하는 합성 채널이 좋은 행을 고른다. 고르는 규칙만 다르다.

# 활용

- 이동통신. 5G 이동통신 표준의 제어 채널이 polar 부호를 쓴다.
- 목록 복호. 연속 소거 복호에서 후보 경로를 $L$ 개까지 남기고 마지막에 순환 중복 검사로 고르는 목록 복호가 짧은 길이에서 성능을 크게 높인다[^3].
- 다른 문제의 양극화. 같은 섞기를 정보원 압축과 다중 사용자 채널에 써서, 각각 엔트로피와 용량 영역에 다가가는 부호를 만든다.

[^1]: E. Arıkan, "Channel polarization: A method for constructing capacity-achieving codes for symmetric binary-input memoryless channels", *IEEE Transactions on Information Theory* 55 (2009), 3051–3073.
[^2]: E. Arıkan, E. Telatar, "On the rate of channel polarization", *Proceedings of the IEEE International Symposium on Information Theory* (2009), 1493–1495.
[^3]: I. Tal, A. Vardy, "List decoding of polar codes", *IEEE Transactions on Information Theory* 61 (2015), 2213–2226.

# 연관 문서

## 선수지식

- [채널 부호화 정리](channel-coding.md)
- [Reed–Muller 부호](reed-muller-codes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #algorithms #probability
