# Merkle 나무

# 개요

**Merkle 나무(Merkle tree)** 는 데이터 블록들의 해시값을 잎에 두고, 내부 마디마다 두 자식의 값을 이어 붙인 문자열의 해시값을 두는 이진 나무다. 파일을 블록 $1024$ 개로 나눠 서버에 맡긴 뒤 블록 하나가 바뀌지 않았는지 확인하려면, 블록마다 해시값을 보관하거나 전체 해시값 하나만 보관하고 블록 $1024$ 개를 전부 받아야 한다. Merkle 나무에서는 뿌리의 값 하나만 보관하고, 블록 하나를 받을 때 뿌리까지 가는 길의 형제 마디 값 $10$ 개를 함께 받아 확인한다.

# 직관

뿌리의 값 하나가 블록 전체를 대표하고, 블록 하나가 그 뿌리 아래에 들어 있음을 블록 수의 로그만큼의 해시값으로 보인다. Merkle 이 일회용 서명을 여러 번 쓰기 위해 고안했다[^1].

[암호 해시 함수](cryptographic-hash-functions.md)의 충돌 저항성이 나무 전체의 위조 불가능성으로 옮겨진다.

파일을 블록 $1024$ 개로 나눠 서버에 맡기고, 나중에 블록 $B\_i$ 하나를 받아 바뀌지 않았는지 확인하려고 한다. 블록마다 해시값을 보관하면 값 $1024$ 개를 들고 있어야 한다. 전체의 해시값 $H(B\_1\Vert\cdots\Vert B\_{1024})$ 하나만 보관하면, 블록 하나를 확인하는 데 블록 $1024$ 개를 전부 받아야 한다.

두 방법을 섞는다. 이웃한 두 블록의 해시값을 이어 붙여 다시 해시하면 값이 $512$ 개가 되고, 이것을 반복하면 $10$ 단계 뒤에 값 하나가 남는다. 그 값 하나만 보관한다. 블록 $B\_i$ 를 확인할 때 서버는 $B\_i$ 에서 뿌리로 가는 길의 각 단계에서 짝이 되는 값 $10$ 개를 함께 보내고, 받는 쪽은 아래에서부터 해시를 다시 계산해 보관한 값과 비교한다. 이 나무가 Merkle 나무다.

# 정의

## 나무

블록 $B\_1,\dots,B\_n$ 이 있고 $n=2^\ell$ 이다. 해시 함수 $H$ 로 다음과 같이 값을 정한다.

$$
v\_{\ell,i}=H(0\Vert B\_i),\qquad v\_{s,i}=H(1\Vert v\_{s+1,2i-1}\Vert v\_{s+1,2i})\quad(0\le s\lt\ell)
$$

$v\_{0,1}$ 이 **뿌리(root)** 다. 잎과 내부 마디의 입력 앞에 서로 다른 비트를 붙여, 내부 마디의 값을 잎의 값으로 내놓을 수 없게 한다[^2].

## 포함 증명

블록 $B\_i$ 의 **포함 증명(inclusion proof)** 은 잎 $v\_{\ell,i}$ 에서 뿌리로 가는 길의 각 단계에서 형제 마디의 값을 모은 $\ell$ 개의 해시값이다. 확인하는 쪽은 $H(0\Vert B\_i)$ 에서 시작해 형제 값과 함께 위로 해시를 계산하고, 마지막 값이 뿌리와 같으면 받아들인다.

```typescript
function verify(
  H: (bytes: Uint8Array) => Uint8Array,
  block: Uint8Array,
  index: number,
  siblings: Uint8Array[],
  root: Uint8Array,
): boolean {
  let v = H(concat(Uint8Array.of(0), block));
  let i = index;
  for (const s of siblings) {
    v = i % 2 === 0
      ? H(concat(Uint8Array.of(1), v, s))
      : H(concat(Uint8Array.of(1), s, v));
    i = Math.floor(i / 2);
  }
  return equal(v, root);
}
```

`index` 는 $0$ 부터 센다. `concat` 은 바이트열을 이어 붙이고 `equal` 은 두 바이트열이 같은지 본다.

# 성질

## 위조 불가능성

정리. $H$ 가 충돌 저항적이면, 확률적 다항시간 알고리즘이 뿌리 $r$ 과 같은 자리 $i$ 의 서로 다른 블록 $B\ne B'$ 에 대해 둘 다 받아들여지는 포함 증명을 낼 확률은 무시할 만하다.

증명의 요지. 두 증명으로 잎에서 뿌리까지 계산한 두 값의 열을 비교한다. 잎의 입력 $0\Vert B$ 와 $0\Vert B'$ 은 다르고 마지막 값은 둘 다 $r$ 이므로, 입력은 다르고 출력은 같은 첫 단계가 있다. 그 단계의 두 입력이 $H$ 의 충돌이다.

## 크기와 갱신

포함 증명은 해시값 $\log\_2 n$ 개다. 블록 하나를 바꾸면 그 잎에서 뿌리까지 $\log\_2 n$ 개의 값만 다시 계산한다. 나무 전체를 만드는 데에는 해시 계산 $2n-1$ 번이 든다.

## Merkle 서명

Lamport 서명은 키 하나로 한 번만 서명한다([전자서명](digital-signatures.md)). Lamport 공개키 $2^\ell$ 개의 해시값을 잎으로 하는 Merkle 나무를 만들고 뿌리를 공개키로 삼는다. $j$ 번째 서명은 $j$ 번째 Lamport 키로 만든 서명, 그 Lamport 공개키, 그 잎의 포함 증명이다[^1]. 검증자는 Lamport 서명을 확인하고 포함 증명으로 공개키가 뿌리 아래에 있음을 확인한다. 서명자는 어느 잎까지 썼는지 기억해야 한다.

# 활용

- 버전 관리. Git 은 파일 내용과 디렉터리 목록을 해시값으로 가리키고, 커밋 하나의 해시값이 그 시점의 디렉터리 전체를 대표한다.
- 블록체인. Bitcoin 의 블록 머리에는 거래들의 Merkle 뿌리가 들어 있고, 블록 전체를 받지 않는 경량 노드는 포함 증명으로 거래가 블록에 들어 있음을 확인한다[^3].
- 인증서 투명성. 공개 로그가 발급된 인증서들을 Merkle 나무로 쌓고, 인증서의 포함 증명과 두 시점의 뿌리 사이의 일관성 증명을 내놓는다[^2].
- 해시 기반 서명. Merkle 서명에서 서명자가 상태를 기억하지 않게 한 방식이 NIST(National Institute of Standards and Technology)의 SLH-DSA(stateless hash-based digital signature algorithm)다.

[^1]: R. C. Merkle, "A certified digital signature", CRYPTO 1989, LNCS 435, 218–238.
[^2]: B. Laurie, A. Langley, E. Kasper, "Certificate Transparency", RFC 6962, 2013, 2.1 절.
[^3]: S. Nakamoto, "Bitcoin: a peer-to-peer electronic cash system", 2008, 7–8 절.

# 연관 문서

## 선수지식

- [암호 해시 함수](cryptographic-hash-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#cryptography #data_structures #complexity
