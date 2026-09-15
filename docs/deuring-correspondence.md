# Deuring 대응과 사원수 알고리즘

# 개요

[초특이 동종사상 그래프](supersingular-isogeny-graphs.md)에서 곡선의 자기준동형환이 비가환이라는 사실이 모든 것의 근원이라고 했다. 그 비가환 환이 무엇인지를 끝까지 따라가면 **Deuring 대응**이 나온다.

$$
\{\text{표수 }p\ \text{초특이 타원곡선}\}\ \longleftrightarrow\ \{\text{사원수대수 }B_{p,\infty}\ \text{의 극대차수}\}
$$

$p$ 와 $\infty$ 에서만 분기하는 [사원수대수](brauer-groups.md) $B_{p,\infty}$ 는 동형을 무시하면 하나뿐이다. 그 안의 극대차수들과 초특이 곡선들이 일대일로 대응하고, 대응은 대상에서 끝나지 않는다. **동종사상이 좌이념으로, 합성이 이념의 곱으로, 차수가 노름으로** 번역된다. 기하의 사전 전체가 대수의 사전으로 옮겨진다.

이 사전이 쓸모 있는 이유는 양쪽의 계산 난이도가 정반대이기 때문이다. 곡선 쪽에서 두 정점 사이의 동종사상 경로를 찾는 일은 지수 시간이고, 그 어려움 위에 암호가 설계되었다. 사원수 쪽에서 같은 일은 **격자 문제이고 다항 시간에 풀린다**(KLPT 알고리즘). 사전을 어느 방향으로 건널 수 있느냐가 곧 암호의 안전성이 되고, 건널 수 있는 쪽을 골라 쓰는 것이 SQIsign 서명의 설계다.

# 직관

## 왜 이념이 동종사상인가

$\varphi:E\to E'$ 를 동종사상, $\mathcal O=\mathrm{End}(E)$ 라 하자. 집합

$$
I_\varphi=\{\alpha\in\mathcal O:\ \varphi\circ\alpha=0\ \text{on}\ \ker\varphi\}
=\mathrm{Hom}(E',E)\cdot\varphi
$$

는 $\mathcal O$ 의 좌이념이다. 거꾸로 좌이념 $I$ 가 주어지면 $\ker I=\bigcap_{\alpha\in I}\ker\alpha$ 를 커널로 갖는 동종사상이 하나 정해진다. 두 구성이 서로 역이다.

곱셈 구조가 맞아떨어지는 것이 요점이다.

| 곡선 쪽 | 사원수 쪽 |
| --- | --- |
| 초특이 곡선 $E$ | 극대차수 $\mathcal O\cong\mathrm{End}(E)$ |
| 동종사상 $\varphi:E\to E'$ | 좌 $\mathcal O$ 이념 $I_\varphi$ |
| $\deg\varphi$ | 노름 $\mathrm{N}(I_\varphi)$ |
| 합성 $\psi\circ\varphi$ | 이념의 곱 |
| 쌍대 $\hat\varphi$ | 켤레 이념 $\bar I$ |
| $E\cong E'$ | 같은 좌이념 류 |
| 동종사상 그래프 | 이념 류 그래프 |

마지막 줄이 개수를 맞춘다. 좌이념 류의 개수가 곧 초특이 $j$ 불변량의 개수이고, 양쪽 모두 Eichler 의 질량 공식이 $(p-1)/24$ 로 준다. 두 유한집합이 같은 크기인 것이 아니라 **같은 집합**이라는 것이 Deuring 의 정리다.

```mermaid
graph LR
  A["초특이 곡선 E<br/>기하"] -- "End" --> B["극대차수 O<br/>대수"]
  A -- "동종사상 찾기<br/>지수 시간" --> A2["목표 곡선 E'"]
  B -- "KLPT<br/>다항 시간" --> B2["목표 차수 O'"]
  B2 -- "이념을 동종사상으로 번역" --> A2
```

## 어려움이 어디에 있는가

곡선만 주어지면 $\mathrm{End}(E)$ 를 계산하는 일 자체가 어렵다. 알려진 최선이 $\widetilde O(\sqrt p)$ 다. 반대로 $\mathcal O$ 를 손에 쥐고 있으면 곡선 사이의 경로를 다항 시간에 만들 수 있다.

Wesolowski 를 비롯한 후속 연구가 이 둘이 **같은 문제**임을 증명했다. 자기준동형환 계산과 경로 찾기가 다항 시간 환원으로 서로 옮겨 간다. 그래서 초특이 동종사상 암호의 안전성은 단 하나의 가정, "$\mathrm{End}(E)$ 를 계산하기 어렵다"로 모인다.

## 매끄러운 노름이 필요한 이유

사원수 쪽에서 찾은 이념을 곡선 쪽으로 번역하려면 커널을 실제로 그려야 한다. 차수 $N$ 의 동종사상을 직접 계산하는 비용은 $N$ 에 선형이라 $N$ 이 크면 쓸 수 없다. 그런데 $N=\ell^e$ 처럼 **매끄러우면** 차수 $\ell$ 짜리 $e$ 번의 합성으로 쪼개져 비용이 $e\cdot\ell$ 로 줄어든다.

KLPT 알고리즘이 하는 일이 정확히 이것이다. 주어진 이념과 같은 류에 속하면서 노름이 $\ell^e$ 인 대표를 찾는다. 같은 류의 이념은 같은 곡선을 가리키므로 바꿔도 손해가 없고, 노름만 계산하기 좋은 모양으로 갈아 끼우는 것이다.

# 정의

## 사원수대수와 극대차수

$p\equiv3\pmod 4$ 일 때

$$
B_{p,\infty}=\Bigl(\frac{-1,\,-p}{\mathbb Q}\Bigr)=\mathbb Q\oplus\mathbb Q i\oplus\mathbb Q j\oplus\mathbb Q k,
\qquad i^2=-1,\ j^2=-p,\ k=ij=-ji
$$

이고 노름은 $\mathrm N(x+yi+zj+wk)=x^2+y^2+p(z^2+w^2)$ 다. 극대차수의 예가

$$
\mathcal O=\mathbb Z\Bigl\langle 1,\ i,\ \frac{i+k}2,\ \frac{1+j}2\Bigr\rangle
$$

이고, 이것이 $j=1728$ 인 초특이 곡선의 자기준동형환이다.

## Deuring 대응

$E\mapsto\mathrm{End}(E)$ 가 초특이 곡선의 동형류에서 $B_{p,\infty}$ 의 극대차수의 형류(type)로의 전단사를 준다. 더 나아가 범주 사이의 **반대응**이다. $E$ 를 고정하고 $\mathcal O=\mathrm{End}(E)$ 라 하면

$$
\{E\ \text{에서 나가는 동종사상}\}\ \longleftrightarrow\ \{\mathcal O\ \text{의 좌이념}\}
$$

이고 차수와 노름, 합성과 곱이 대응한다.

## KLPT 문제

> 좌 $\mathcal O$ 이념 $I$ 와 소수 $\ell$ 이 주어졌을 때, $J\sim I$(같은 류)이고 $\mathrm N(J)=\ell^e$ 인 $J$ 를 찾아라.

Kohel–Lauter–Petit–Tignol 이 $e=O(\log p)$ 로 이를 다항 시간에 푸는 알고리즘을 주었다.

# 성질

## 노름 형식이 언제 $\ell^e$ 를 표현하는가

KLPT 의 심장은 4 변수 정부호 이차형식 $x^2+y^2+p(z^2+w^2)$ 가 주어진 매끄러운 수를 표현하도록 만드는 일이다. 형식이 정부호이므로 $z,w$ 가 0 이 아니려면 표현할 수가 최소 $2p$ 는 되어야 한다. 실제로 그 문턱을 넘으면 곧 해가 나타난다.

```python
from math import isqrt, log2

def solve(p, n):
    """x^2+y^2+p(z^2+w^2)=n 의 해를 z,w 가 0 이 아닌 범위에서 찾는다"""
    for z in range(1, isqrt(n // p) + 1):
        for w in range(1, isqrt(n // p) + 1):
            r = n - p * (z * z + w * w)
            if r < 0:
                break
            for x in range(isqrt(r) + 1):
                y = isqrt(r - x * x)
                if x * x + y * y == r and y > 0:
                    return (x, y, z, w)
    return None

print('  p     최소 e   2^e     해 (x,y,z,w)      log2(2p)')
for p in (103, 251, 1019, 4099, 16411):
    for e in range(1, 30):
        s = solve(p, 2**e)
        if s:
            print(f'{p:6d}   {e:3d}  {2**e:8d}   {str(s):18s} {log2(2*p):.2f}')
            break
```

```
  p     최소 e   2^e     해 (x,y,z,w)      log2(2p)
   103     8       256   (1, 7, 1, 1)       7.69
   251     9       512   (1, 3, 1, 1)       8.97
  1019    11      2048   (1, 3, 1, 1)       10.99
  4099    14     16384   (31, 85, 1, 1)     13.00
 16411    18    262144   (161, 451, 1, 1)   15.00
```

최소 지수가 $\log_2 p$ 에 상수를 더한 규모로 따라간다. 여기서 두 가지가 읽힌다. 첫째, 매끄러운 노름을 가진 대표는 **항상 존재하되 노름이 $p$ 보다 훨씬 클 수는 없다.** 둘째, 그 노름이 $\ell^{O(\log p)}$ 이므로 곡선 쪽 번역이 $O(\log p)$ 번의 $\ell$ 차 합성으로 끝나 실용적이다. KLPT 가 다항 시간인 근거가 이 한 줄의 크기 계산이다.

위 코드는 완전 탐색이라 작은 $p$ 에서만 돌아간다. 실제 KLPT 는 Cornacchia 알고리즘으로 $x^2+y^2=r$ 을 직접 풀고, $z,w$ 는 합동 조건을 만족하도록 격자에서 고른다.

## 대응은 명시적이지 않다

Deuring 대응의 존재는 정리지만, $E$ 가 주어졌을 때 $\mathrm{End}(E)$ 를 **적어 내는** 일은 어렵다. 반대 방향, 곧 $\mathcal O$ 에서 $E$ 를 복원하는 일도 일반적으로는 어렵다. 다항 시간에 건널 수 있는 것은 **한 곡선의 $\mathrm{End}$ 를 이미 알고 있을 때 그 이웃들로 가는 길**뿐이다. 이 비대칭이 암호 설계의 전부다.

# 활용

## SQIsign

SIDH 가 2022 년에 깨진 뒤에도 살아남은 동종사상 기반 서명이 **SQIsign** 이다. 구조는 $\Sigma$ 규약이다.

1. 비밀키는 기준 곡선 $E_0$ 에서 비밀 곡선 $E_A$ 로 가는 비밀 동종사상이다. 이를 알면 $\mathrm{End}(E_A)$ 를 안다. 공개키는 $E_A$ 뿐이다.
2. 서명자가 임의의 곡선 $E_1$ 로 걸어가 약속으로 보낸다.
3. 챌린지가 $E_1$ 에서 나가는 동종사상 하나를 지정한다.
4. 응답은 $E_A$ 에서 챌린지의 목적지로 가는 동종사상이다. 서명자는 $\mathrm{End}(E_A)$ 를 알기 때문에 사원수 쪽에서 이념을 만들고 KLPT 로 노름을 $\ell^e$ 로 갈아 끼운 뒤 곡선 쪽으로 번역한다.

검증자는 응답이 실제 동종사상인지만 확인한다. $\mathrm{End}(E_A)$ 를 모르면 4 단계를 수행할 수 없다는 것이 안전성의 근거다. 서명 크기가 후양자 후보 가운데 가장 작은 축이라는 점이 이 방식의 실용적 강점이다.

## 왜 SIDH 의 공격이 여기에는 통하지 않는가

SIDH 를 깬 Castryck–Decru 공격은 비밀 동종사상의 **비틀림점 상**이 공개된다는 점을 파고들었다. 고차원 아벨 다양체를 붙여 비밀을 복원하는 방식이다. SQIsign 은 비틀림점 정보를 공개하지 않고 동종사상 자체만 응답으로 보내므로 그 공격의 입력이 존재하지 않는다. 같은 그래프 위에서 무엇을 흘리느냐가 갈랐다.

## 질량 공식과 그래프의 정규성

좌이념 류의 개수를 세는 Eichler 의 질량 공식이 Deuring 대응을 통해 초특이 곡선의 개수 공식이 된다. 한 걸음 더 가면 이념 류 위의 Brandt 행렬이 동종사상 그래프의 인접 행렬과 같아지고, 그 행렬이 무게 2 첨점형식 위의 Hecke 작용소와 같은 고윳값을 갖는다. 그래프가 Ramanujan 인 근거인 Deligne 경계가 그 고윳값에 적용되는 경로가 이것이다. **암호가 기대는 섞임 속도가 자기동형 형식의 정리에서 나온다.**

[^1]: 대응의 원형은 M. Deuring, *Die Typen der Multiplikatorenringe elliptischer Funktionenkörper*, Abh. Math. Sem. Univ. Hamburg **14** (1941). 현대적 서술과 이념 사전은 J. Voight, *Quaternion Algebras* (2021) 42 장. 알고리즘 쪽은 D. Kohel, K. Lauter, C. Petit, J.-P. Tignol, *On the quaternion* $\ell$*-isogeny path problem*, LMS J. Comput. Math. **17** (2014). 자기준동형환 계산과 경로 찾기의 동치는 B. Wesolowski, *The supersingular isogeny path and endomorphism ring problems are equivalent*, FOCS 2021. 서명은 L. De Feo, D. Kohel, A. Leroux, C. Petit, B. Wesolowski, *SQISign*, ASIACRYPT 2020. 본문의 노름 형식 실험은 직접 한 것이다.

# 연관 문서

## 선수지식

- [초특이 동종사상 그래프와 SIDH](supersingular-isogeny-graphs.md)
- [Brauer 군과 Hasse 원리](brauer-groups.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #cryptography #algorithms
