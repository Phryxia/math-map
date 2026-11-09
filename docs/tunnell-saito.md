# Tunnell–Saito 국소 부호 공식

# 개요

**Tunnell–Saito 국소 부호 공식(Tunnell–Saito local root number formula)** 은 국소체 위 $\mathrm{GL}\_2$ 의 표현과 [사원수 대수](quaternion-algebras.md) 쪽의 대응 표현 가운데 어느 쪽이 토러스 위의 주어진 지표로 변환하는 범함수를 갖는지를 $\varepsilon$ 인자의 부호로 판정하는 공식이다. 복소수의 곱셈군 $\mathbb C^\times$ 는 $2\times2$ 실행렬의 군 $\mathrm{GL}\_2(\mathbb R)$ 안에도, Hamilton 사원수의 곱셈군 $\mathbb H^\times$ 안에도 들어간다. 두 군의 대응하는 표현을 $\mathbb C^\times$ 로 제한했을 때 주어진 지표가 나타나는 것은 정확히 한쪽뿐이다. 이 공식은 국소 $\varepsilon$ 인자 하나를 계산해 그쪽을 정한다.

# 직관

[Waldspurger 정리와 토릭 주기](waldspurger-formula.md)는 모듈러 형식의 $L$ 함수 중심값이 토러스 위의 적분, 곧 토릭 주기로 적힌다는 정리다. 그 적분은 $\mathrm{GL}\_2$ 위에서 할 수도 있고 사원수 대수의 곱셈군 위에서 할 수도 있으며, 어느 쪽에서 $0$ 이 아닐 수 있는지는 자리마다 따로 정해진다. 실수 자리에서 그 물음은 개요의 $\mathbb C^\times\subset\mathrm{GL}\_2(\mathbb R)$ 과 $\mathbb C^\times\subset\mathbb H^\times$ 가운데 어느 쪽에서 지표가 나타나는가이다.

$\mathbb H^\times$ 를 중심 $\mathbb R^\times$ 로 나누면 콤팩트하므로 그 기약 표현은 유한차원이고, $\mathbb C^\times$ 로 제한해 어느 지표가 나타나는지는 유한차원 표현을 분해하는 계산이다. $\mathrm{GL}\_2(\mathbb R)$ 쪽은 무한차원 표현을 다룬다. 두 군은 같은 $L$ 군을 갖는 내부형식이고, 서로 대응하는 두 표현에서 나타나는 지표를 모으면 각 지표가 정확히 한 번씩 나타난다. 지표가 어느 쪽에서 나타나는지는 $\varepsilon$ 인자의 부호가 $+1$ 이면 $\mathrm{GL}\_2$, $-1$ 이면 $\mathbb H^\times$ 로 정해진다.

# 정의

## 국소체 위의 이차 확대와 지표

$F$ 를 비아르키메데스 국소체, $K/F$ 를 이차 확대, $\eta_{K/F}$ 를 [유체론](class-field-theory.md)이 주는 이차 지표라 하자. $\pi$ 는 $\mathrm{GL}\_2(F)$ 의 무한차원 기약 표현이고 중심 지표가 $\omega_\pi$ 다. $\chi$ 는 $K^\times$ 의 지표로 $\chi|\_{F^\times}=\omega_\pi$ 를 만족한다고 가정한다.

$D$ 는 $F$ 위의 나눗셈 사원수 대수(quaternion division algebra)이고, $K$ 는 $\mathrm{GL}\_2(F)$ 와 $D^\times$ 양쪽에 극대 토러스로 들어간다. $\pi$ 가 이산계열(discrete series)이면 [Jacquet–Langlands 대응](jacquet-langlands.md)으로 $D^\times$ 의 유한차원 표현 $\pi'=\mathrm{JL}^{-1}(\pi)$ 가 있다. 이산계열이 아니면 $D^\times$ 쪽 상대가 없다.

**토릭 범함수(toric functional)** 는 $\mathrm{Hom}\_{K^\times}(\pi,\chi)$ 의 원소, 곧 $\ell(\pi(t)v)=\chi(t)\ell(v)$ 를 만족하는 선형 범함수 $\ell$ 이다. $F=\mathbb R$, $K=\mathbb C$, $D=\mathbb H$ 이면 $\pi'$ 는 $\mathbb H^\times$ 의 유한차원 표현이고, $\mathrm{Hom}\_{\mathbb C^\times}(\pi',\chi)\neq0$ 은 $\pi'$ 를 $\mathbb C^\times$ 로 제한한 분해에 $\chi$ 가 나타난다는 뜻이다.

# 성질

## 국소 부호 공식

Tunnell(1983)과 Saito(1993)의 정리.

$$
\dim\mathrm{Hom}\_{K^\times}(\pi,\chi)+\dim\mathrm{Hom}\_{K^\times}(\pi',\chi)=1
$$

이고, 각 항은 다음으로 결정된다.

$$
\dim\mathrm{Hom}\_{K^\times}(\pi,\chi)=
\begin{cases}
1,&\varepsilon\negthinspace\left(\tfrac12,\pi_K\otimes\chi\right)\eta_{K/F}(-1)=+1\cr
0,&\text{그 외}
\end{cases}
$$

여기서 $\pi_K$ 는 $\pi$ 의 $K$ 로의 기저변환이고, $\varepsilon$ 는 고정된 가법 지표에 대한 국소 $\varepsilon$ 인자다. $\pi$ 가 이산계열이 아니면 부호가 언제나 $+1$ 이라 $\mathrm{GL}\_2$ 쪽에 범함수가 있다.

## 증명의 요지

Saito 의 증명은 양쪽 $\mathrm{Hom}$ 공간의 차원을 지표의 적분으로 적는다. 그렇게 적으면

$$
\dim\mathrm{Hom}\_{K^\times}(\pi,\chi)
=\int_{K^\times/F^\times}\Theta_\pi(t)\thinspace\chi^{-1}(t)\thinspace dt
$$

꼴이 되고(적분은 정칙화가 필요하다), Jacquet–Langlands 대응의 지표 항등식 $\Theta_{\pi'}=-\Theta_\pi$ 가 두 적분의 합을 상수로 만든다. 그 상수가 1 이라는 것이 정리의 내용이고, 부호를 $\varepsilon$ 로 동정하는 부분에 국소 함수방정식이 들어간다.


## 비분기 경우의 그림

$\pi$ 가 비분기 주계열이고 $K/F$ 가 불분기이면 $\varepsilon=+1$ 이 되어 언제나 $\mathrm{GL}\_2$ 쪽에 범함수가 있고 $D^\times$ 쪽은 0 이다. 전역 문제에서 유한 개의 나쁜 자리만 따지면 되므로 Waldspurger 정리의 분지 집합 $\Sigma$ 가 유한하다.

## 무한 자리

$F=\mathbb R$ 이고 $K=\mathbb C$ 인 경우도 같은 형태다. 무게 $2k$ 의 이산계열과 지표 $\chi$ 의 무게를 비교해 부호가 정해지고, 부호가 $-1$ 이면 콤팩트형 $\mathbb H^\times$ 쪽에 범함수가 있다. 확정 사원수 대수가 쓰이는 상황이 이것이다.

## Tunnell 의 합동수 판정

$n$ 이 합동수(congruent number)라는 것은 세 변이 유리수인 직각삼각형의 넓이가 $n$ 이라는 뜻이고, [타원곡선](elliptic-curves.md) $E_n:y^2=x^3-n^2x$ 의 계수(rank)가 양수라는 것과 동치다. Tunnell 은 Waldspurger 정리와 [Shimura 대응](shimura-correspondence.md)으로 $L(E_n,1)$ 의 값을 무게 $3/2$ 형식의 계수, 곧 삼항 이차형식의 표현수로 적었다. 어느 사원수 대수의 순서에서 그 삼항 형식을 만드는지를 정하는 데 국소 부호가 쓰인다.

> $n$ 이 홀수 무제곱수일 때, $n$ 이 합동수이면 다음이 성립한다.
>
> $$
> \begin{aligned}&2\thinspace\char35{}\lbrace(x,y,z)\in\mathbb Z^3: n=2x^2+y^2+32z^2\rbrace\cr &\quad=\char35{}\lbrace(x,y,z)\in\mathbb Z^3: n=2x^2+y^2+8z^2\rbrace\end{aligned}
> $$
>
> BSD(Birch–Swinnerton-Dyer) 추측을 가정하면 역도 성립한다.

짝수 $n=2m$ 에서는 $4x^2+y^2+32z^2$ 과 $4x^2+y^2+8z^2$ 을 쓴다. 판정이 유한 계산으로 끝난다.

```javascript
// a x^2 + b y^2 + c z^2 = n 의 정수해 개수
function count(n, a, b, c) {
  let t = 0
  const X = Math.floor(Math.sqrt(n / a)), Z = Math.floor(Math.sqrt(n / c))
  for (let x = -X; x <= X; x++) for (let z = -Z; z <= Z; z++) {
    const r = n - a * x * x - c * z * z
    if (r < 0) continue
    const y = Math.round(Math.sqrt(r / b))
    for (const yy of [y - 1, y, y + 1]) if (b * yy * yy === r) { t += yy === 0 ? 1 : 2; break }
  }
  return t
}

// Tunnell 판정 (BSD 를 가정하면 필요충분)
function tunnell(n) {
  if (n % 2 === 1) return 2 * count(n, 2, 1, 32) === count(n, 2, 1, 8)
  const m = n / 2
  return 2 * count(m, 4, 1, 32) === count(m, 4, 1, 8)
}
```

$5,6,7$ 이 합동수이고 $1,2,3$ 이 아니라는 고전적 사실이 나온다. $1$ 이 합동수가 아니라는 것은 Fermat 이 무한강하법으로 증명한 명제이며, 그가 다룬 $x^4-y^4=z^2$ 의 불가능성과 같은 진술이다.

## Tunnell 판정의 네 단계

Tunnell 판정은 네 단계로 이루어진다. 국소 부호 공식이 각 자리에서 범함수의 존재를 결정하고, Waldspurger 정리가 그 국소 정보를 전역 주기의 비소멸로 묶고, 주기가 중심값 $L(E_n,1)$ 을 주며, 그 중심값을 Shimura 대응으로 반정수 무게 형식의 계수로 적으면 삼항 이차형식의 표현수가 된다.

# 활용

## Gan–Gross–Prasad 추측

[Gan–Gross–Prasad 추측](gan-gross-prasad.md)은 고전군의 분기 법칙을 $\varepsilon$ 인자로 정하는 추측이고, 이 정리는 그 가장 낮은 경우다. $\mathrm{Hom}$ 공간의 차원 합이 1 이라는 것, 어느 내부형식인지를 $\varepsilon$ 이 결정한다는 것, 부호가 국소 함수방정식에서 온다는 것이 그대로 일반화되었다.

## 주기의 사전 판정

각 자리에서 부호를 계산하면 전역 토릭 주기가 어느 사원수 대수 위에서 0 이 아닐 수 있는지 정해진다. 그 사원수 대수는 부호가 $-1$ 인 자리에서 분기한다.

## 이차 뒤틀림 족의 조직

합동수 문제에서 $n\equiv5,6,7\ (\mathrm{mod}\ 8)$ 이면 부호가 $-1$ 이라 $L(E_n,1)=0$ 이 강제되므로, BSD 를 가정하면 그런 $n$ 은 모두 합동수다. 이 부호는 전역 함수방정식의 부호다.

# 연관 문서

## 선수지식

- [Waldspurger 정리와 토릭 주기](waldspurger-formula.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #group_theory #computation
