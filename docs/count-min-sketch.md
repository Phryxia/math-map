# Count-Min 스케치

# 개요

**Count-Min 스케치(Count-Min sketch)** 는 항목이 하나씩 지나가는 스트림(stream)에서 항목마다의 등장 횟수를, 서로 다른 항목의 수와 무관한 크기의 계수기 표로 추정하는 자료구조다. Cormode 와 Muthukrishnan 이 2005 년에 제안했다[^1].

추정값은 참값 이상이고, 참값보다 $\varepsilon N$ 넘게 클 확률이 $\delta$ 이하다. $N$ 은 스트림의 길이다. 표의 행마다 [범용 해시족](universal-hashing.md)에서 고른 함수 하나가 항목의 계수기를 정한다.

# 직관

웹 서버가 요청을 보낸 IP(internet protocol) 주소마다 요청 횟수를 세려고 한다. 주소는 $2^{32}$ 가지이고, 주소를 키로 하는 사전으로 세면 메모리가 서로 다른 주소의 수에 비례한다. 그래서 계수기 $w$ 개짜리 배열 $C$ 와 해시 함수 $h$ 를 두고, 요청이 올 때마다 $C\lbrack h(x)\rbrack$ 에 $1$ 을 더한다.

주소 $a$ 의 횟수를 $C\lbrack h(a)\rbrack$ 로 읽으면, 같은 칸에 들어간 다른 주소들의 횟수가 더해져 있다. 그래서 읽은 값은 참값 이상이다. $h$ 를 범용 해시족에서 고르면 다른 주소가 같은 칸에 들 확률이 $1/w$ 이하이므로 더해진 양의 기댓값은 $N/w$ 이하다.

기댓값이 작아도 한 배열에서는 더해진 양이 기댓값의 몇 배가 될 확률이 작지 않다. 그래서 독립으로 고른 함수 $d$ 개로 배열 $d$ 개를 두고 $d$ 개의 값 가운데 가장 작은 것을 읽는다. 가장 작은 값이 크게 틀리려면 모든 배열이 동시에 크게 틀려야 하고, 그 확률은 $d$ 에 대해 지수적으로 줄어든다. 이 $d\times w$ 표와 최솟값 읽기가 Count-Min 스케치다.

# 정의

## 빈도

스트림 $x\_1,\dots,x\_N$ 의 항목은 집합 $U$ 에 속한다. 항목 $a\in U$ 의 **빈도(frequency)** 는 $f(a)=\lvert\lbrace i: x\_i=a\rbrace\rvert$ 이다.

## 스케치

정확도 $\varepsilon$ 과 실패 확률 $\delta$ 에 대해 $w=\lceil e/\varepsilon\rceil$, $d=\lceil\ln(1/\delta)\rceil$ 로 둔다. $U\to\lbrace 0,\dots,w-1\rbrace$ 의 범용 해시족에서 함수 $h\_1,\dots,h\_d$ 를 독립으로 고르고, $d\times w$ 표 $C$ 를 $0$ 으로 채운다.

- 갱신. 항목 $x$ 가 오면 모든 $j$ 에 대해 $C\lbrack j,h\_j(x)\rbrack$ 에 $1$ 을 더한다.
- 질의. $a$ 의 추정값은 다음이다.

$$
\hat f(a)=\min\_{1\le j\le d}C\lbrack j,h\_j(a)\rbrack
$$

```typescript
function update(C: number[][], h: Array<(x: string) => number>, x: string, c = 1): void {
  for (let j = 0; j < h.length; j++) {
    const hj = h[j];
    C[j][hj(x)] += c;
  }
}

function query(C: number[][], h: Array<(x: string) => number>, a: string): number {
  let best = Infinity;
  for (let j = 0; j < h.length; j++) {
    const hj = h[j];
    best = Math.min(best, C[j][hj(a)]);
  }
  return best;
}
```

# 성질

## 오차 한계

정리. 모든 $a$ 에 대해 $\hat f(a)\ge f(a)$ 이고, 다음이 성립한다[^1].

$$
\Pr\bigl\lbrack\hat f(a)\gt f(a)+\varepsilon N\bigr\rbrack\le\delta
$$

증명의 요지. 행 $j$ 의 값은 $C\lbrack j,h\_j(a)\rbrack=f(a)+Y\_j$ 이고, $Y\_j$ 는 $h\_j(b)=h\_j(a)$ 인 $b\ne a$ 의 빈도의 합이므로 $0$ 이상이다. 범용성으로 $\mathbb E\lbrack Y\_j\rbrack\le N/w\le\varepsilon N/e$ 이고, [확률변수](random-variables.md)의 Markov 부등식(Markov's inequality)으로 $\Pr\lbrack Y\_j\gt\varepsilon N\rbrack\le 1/e$ 다. 행들의 함수가 독립이므로 모든 행에서 $Y\_j\gt\varepsilon N$ 일 확률은 $e^{-d}\le\delta$ 다.

## 공간과 시간

표의 계수기는 $dw=O(\varepsilon^{-1}\log(1/\delta))$ 개이고 각각 $O(\log N)$ 비트다. 갱신과 질의는 해시 함수 $d$ 개를 계산하므로 $O(\log(1/\delta))$ 시간이다. 두 값 모두 $\lvert U\rvert$ 와 서로 다른 항목의 수에 의존하지 않는다.

## 선형성

같은 함수 $h\_1,\dots,h\_d$ 로 만든 두 스케치의 표를 칸마다 더하면 두 스트림을 이어 붙인 스트림의 스케치가 된다. 그래서 여러 서버가 따로 만든 스케치를 합쳐 전체 빈도를 추정한다. 갱신에 음수 $c$ 를 허용해 항목을 지우는 회전문 모형(turnstile model)에서도, 최종 빈도가 모두 $0$ 이상이면 오차 한계 정리가 그대로 성립한다.

## 빈발 항목

$f(a)\ge\phi N$ 인 항목을 **빈발 항목(heavy hitter)** 이라 한다. 항목이 올 때마다 $\hat f(x)$ 를 계산해 $\phi N$ 이상인 것을 크기 $O(1/\phi)$ 의 힙에 유지하면, 빈발 항목은 모두 남고 $\hat f$ 의 오차 한계 때문에 $f(a)\lt(\phi-\varepsilon)N$ 인 항목은 각각 확률 $1-\delta$ 이상으로 남지 않는다[^1].

# 활용

- 네트워크 감시. 라우터가 흐름마다 바이트 수를 고정된 메모리로 세고 빈발 항목으로 대량 트래픽의 출처를 찾는다.
- 데이터베이스. 두 스케치의 행별 내적 가운데 최솟값은 두 빈도 벡터의 내적을 $\varepsilon$ 에 비례하는 오차로 추정하고, 조인 결과의 크기를 실행 전에 추정하는 데 쓰인다[^1].
- 질의 분포의 추정. 검색어나 단어 묶음의 빈도를 사전 없이 세어 언어 모형과 캐시 정책에 쓴다.

[^1]: G. Cormode, S. Muthukrishnan, "An improved data stream summary: the count-min sketch and its applications", Journal of Algorithms 55 (2005), 58–75.

# 연관 문서

## 선수지식

- [범용 해시족](universal-hashing.md)

## 더 알아보기

아직 연결한 문서가 없다.

#data_structures #algorithms #probability
