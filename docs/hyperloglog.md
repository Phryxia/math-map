# HyperLogLog

# 개요

**HyperLogLog(HyperLogLog algorithm)** 는 데이터 흐름에 나온 서로 다른 원소의 개수를, 원소를 저장하지 않고 수 킬로바이트의 메모리로 추정하는 방법이다. 하루 동안 웹사이트를 방문한 서로 다른 사용자 수를 세려면 본 사용자를 모두 기억해 두어야 해서 사용자 수에 비례하는 메모리가 든다. HyperLogLog 는 사용자마다 해시값을 내어 그 이진 표현이 $0$ 으로 몇 자리나 시작하는지만 기록하고, 가장 긴 $0$ 의 줄로부터 개수를 추정한다.

# 직관

해시값을 $0$ 과 $1$ 이 고르게 나오는 비트열로 보면, 비트열이 $0$ 으로 시작할 확률은 $1/2$, $00$ 으로 시작할 확률은 $1/4$, $0$ 이 $\rho-1$ 개 이어진 뒤 $1$ 이 오는 확률은 $2^{-\rho}$ 다. 서로 다른 원소가 $n$ 개이면 같은 원소는 같은 해시값을 내므로 비트열이 $n$ 개 나오고, 그 가운데 처음 $1$ 이 $\rho$ 번째 자리에 오는 것이 있으려면 $n$ 이 대략 $2^\rho$ 이상이어야 한다.

비트열 $1000$ 개 가운데 처음 $1$ 의 자리가 가장 늦은 것이 $10$ 번째이면 $2^{10}=1024$ 를 추정값으로 삼는다. 이 추정은 한 비트열의 운에 크게 흔들린다. 그래서 해시값의 앞 몇 비트로 원소를 $m$ 개의 묶음으로 나누고, 묶음마다 가장 늦은 처음 $1$ 의 자리를 따로 기록한 뒤 그 값들을 평균한다.

# 정의

## 레지스터

해시 함수 $h$ 가 원소를 길이가 충분한 비트열로 보낸다. $m=2^b$ 라 하고, $h(x)$ 의 앞 $b$ 비트가 나타내는 수 $j$ 를 $x$ 의 묶음 번호, 나머지 비트열 $w$ 에서 처음 $1$ 이 나오는 자리를 $\rho(w)$ 라 한다. **레지스터(register)** $M\lbrack j\rbrack$ 는 묶음 $j$ 에 든 원소들의 $\rho(w)$ 가운데 가장 큰 값이다. 처음 값은 $0$ 이다.

예. $b=2$ 이고 $h(x)=10\thinspace 0011\cdots$ 이면 묶음 번호는 $2$ 이고 $\rho(0011\cdots)=3$ 이므로, $M\lbrack 2\rbrack$ 가 $3$ 보다 작으면 $3$ 으로 바꾼다.

## 추정값

**HyperLogLog 추정값** 은 레지스터들의 조화평균으로 만든 다음 값이다.

$$
E=\alpha\_m\thinspace m^2\Bigl(\sum_{j=0}^{m-1}2^{-M\lbrack j\rbrack}\Bigr)^{-1}
$$

$\alpha\_m$ 은 기댓값의 치우침을 바로잡는 상수이고, $m\ge 128$ 에서 $\alpha\_m\approx 0.7213/(1+1.079/m)$ 이다. Flajolet, Fusy, Gandouet, Meunier 가 2007 년에 제안했다[^1].

```typescript
// 해시값 hash 는 32 비트 부호 없는 정수, m = 2^b 개의 레지스터.
function add(M: Uint8Array, b: number, hash: number): void {
  const j = hash >>> (32 - b);
  const w = (hash << b) >>> 0;
  const rho = w === 0 ? 32 - b + 1 : Math.clz32(w) + 1;
  if (rho > M[j]) M[j] = rho;
}

function estimate(M: Uint8Array): number {
  const m = M.length;
  let z = 0;
  for (const r of M) z += Math.pow(2, -r);
  const alpha = 0.7213 / (1 + 1.079 / m);
  return (alpha * m * m) / z;
}
```

예. $m=4$ 이고 레지스터가 $(3,2,4,2)$ 이면 합은 다음과 같다.

$
\sum_{j=0}^{3}2^{-M\lbrack j\rbrack}=\frac18+\frac14+\frac1{16}+\frac14=\frac{11}{16}
$

$\alpha\_m$ 을 곱하기 전의 값은 $16\cdot\frac{16}{11}\approx 23$ 이다.

# 성질

## 오차

$n$ 이 커지면 $E/n$ 의 기댓값은 $1$ 로 가고, 상대 표준오차는 다음 값에 가까워진다[^1].

$$
\frac{1.04}{\sqrt m}
$$

$m=2^{14}$ 이면 상대 표준오차가 약 0.8% 이다. 레지스터 값은 $\log\_2 n$ 정도라 $\log\_2\log\_2 n$ 비트로 적히고, $n\lt 2^{64}$ 이면 $6$ 비트면 되므로 메모리는 약 $12$ 킬로바이트다.

## 작은 범위의 보정

$n$ 이 $m$ 에 비해 작으면 많은 레지스터가 $0$ 으로 남아 $E$ 가 치우친다. $E\le\frac52 m$ 이고 $0$ 인 레지스터가 $V\gt 0$ 개이면, 원소를 $m$ 칸에 던질 때 빈 칸의 수로 개수를 추정하는 다음 값을 대신 쓴다[^1].

$$
m\ln\frac mV
$$

## 합치기

두 흐름의 레지스터 배열을 자리마다 큰 값으로 합치면 두 흐름을 이어 붙인 흐름의 레지스터 배열과 같다. 그러므로 여러 기계가 따로 센 결과를 합집합의 개수 추정으로 합칠 수 있고, 같은 원소가 여러 기계에 나와도 한 번만 센다.

# 활용

- 서로 다른 방문자 수와 검색어 수. 웹 분석과 데이터베이스의 근사 질의가 흐름마다 레지스터 배열 하나를 유지한다.
- 네트워크 감시. 한 출발지가 연락한 서로 다른 목적지 수를 세어 주소 훑기 같은 이상 행동을 찾는다.
- 분산 집계. 시간대별, 지역별로 만든 레지스터 배열을 합쳐 기간 전체나 지역 전체의 개수를 다시 세지 않고 얻는다. 같은 원소의 빈도는 [Count-Min 스케치](count-min-sketch.md)로 세고, 서로 다른 원소의 수는 HyperLogLog 로 센다.

[^1]: P. Flajolet, É. Fusy, O. Gandouet, F. Meunier, "HyperLogLog: the analysis of a near-optimal cardinality estimation algorithm", Proceedings of the 2007 Conference on Analysis of Algorithms, DMTCS Proceedings AH (2007), 127–146.

# 연관 문서

## 선수지식

- [범용 해시족](universal-hashing.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #probability #data_structures
